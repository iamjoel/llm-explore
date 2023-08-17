import {
  SupportedTextSplitterLanguages,
  RecursiveCharacterTextSplitter,
  CharacterTextSplitter,
  TextSplitter
} from "langchain/text_splitter"

/* 
split text: 
1. How the text is split
2. How the chunk size is measured
*/

// CharacterTextSplitter, RecursiveCharacterTextSplitter
// texts is array
export async function splitByWordsAndMaxChunkSize(...texts) {
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 10,
    chunkOverlap: 1,
  });
  
  const res = await splitter.createDocuments(...texts)
  return res
}

export async function splitBySeparator(separator = ' ', ...texts) {
  const splitter = new CharacterTextSplitter({
    separator: separator,
    chunkSize: 10, // if chunksize is very big. It will not split by separator   
    chunkOverlap: 0,
  })
  const res = await splitter.createDocuments(...texts);
  return res
}

export async function splitCode(code, language = 'js') {
  if(!SupportedTextSplitterLanguages.includes(language)) {
    throw `Not support language: ${language}`
  }
  const splitter = RecursiveCharacterTextSplitter.fromLanguage(language, {
    chunkSize: 100,
    chunkOverlap: 0,
  })

  const res = await splitter.createDocuments([code])
  return res
}

// 
export class SeparatorSplitter extends TextSplitter {
  splitText(text) {
    return text.split('@')
  }
}

export async function separatorByAt(...texts) {
  const splitter = new SeparatorSplitter()
  const res = await splitter.createDocuments(...texts)
  return res
}