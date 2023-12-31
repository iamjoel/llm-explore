import { OpenAI } from "langchain/llms/openai";
import { RetrievalQAChain } from "langchain/chains";
import { HNSWLib } from "langchain/vectorstores/hnswlib";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import * as fs from "fs";
import dotenv from 'dotenv'
dotenv.config()
// https://github.com/hwchase17/chat-your-data
// Initialize the LLM to use to answer the question.
const model = new OpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY
});

const STORE_VECTOR_DIRECTORY = './store'
retriever()

async function embedding() {
  const text = fs.readFileSync("./data/state_of_the_union.txt", "utf8");
  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000 });
  const docs = await textSplitter.createDocuments([text]);
  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(docs, new OpenAIEmbeddings());
  
  vectorStore.save(STORE_VECTOR_DIRECTORY)

  return vectorStore
}

async function retriever() {
  let hasEmbedded = false
  try {
    await fs.promises.access('store/docstore.json');
    hasEmbedded = true
  } catch (e) {}
  const vectorStore = hasEmbedded ?
    (await HNSWLib.load(STORE_VECTOR_DIRECTORY, new OpenAIEmbeddings())) : 
    (await embedding())
  
  // Initialize a retriever wrapper around the vector store
  const vectorStoreRetriever = vectorStore.asRetriever();
  
  // Create a chain that uses the OpenAI LLM and HNSWLib vector store.
  const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
  const res = await chain.call({
    query: "What did the president say about Justice Breyer?",
  });
  console.log({ res });
}

/*
{
  res: {
    text: 'The president said that Justice Breyer was an Army veteran, Constitutional scholar,
    and retiring Justice of the United States Supreme Court and thanked him for his service.'
  }
}
*/