// https://js.langchain.com/docs/modules/data_connection/
// source -> load -> transform -> embed -> store -> retrieve

import { PromptTemplate } from "langchain/prompts";

const prompt = PromptTemplate.fromTemplate(`You are a naming consultant for new companies.
What is a good name for a company that makes {product}?`
);

const formattedPrompt = await prompt.format({
  product: "colorful socks",
});

console.log(formattedPrompt)

/*
  You are a naming consultant for new companies.
  What is a good name for a company that makes colorful socks?
*/