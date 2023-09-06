// https://js.langchain.com/docs/modules/data_connection/
// source -> load -> transform -> embed -> store -> retrieve

import {splitByWordsAndMaxChunkSize, splitBySeparator, splitCode, separatorByAt} from './splitter.js'
import dotenv from 'dotenv'
dotenv.config()

console.log(process.env.OPENAI_API_KEY)
// split text
// console.log(await splitByWordsAndMaxChunkSize([`Hi.\n\nI'm Harrison.\n\nHow? Are? You?\nOkay then f f f f.
// This is a weird text to write, but gotta test the splittingggg some how.\n\n
// Bye!\n\n-H.`]))

// https://js.langchain.com/docs/modules/data_connection/document_transformers/text_splitters/contextual_chunk_headers
// add describe (chunkHeader) to every track
// console.log(await splitByWordsAndMaxChunkSize([`My favorite color is blue.`],
// [],
// {
//   chunkHeader: `DOCUMENT NAME: Jim Interview\n\n---\n\n`,
//   appendChunkOverlapHeader: true,
// }))

// console.log(await splitBySeparator('@@@', [`abcab@@@de@@@hij`]))
console.log(await separatorByAt([`abcab@de@hij`]))

// split code.
// console.log(await splitCode(`function helloWorld() {
//   console.log("Hello, World!");
// }
// // Call the function
// helloWorld();

// const sum = (a, b) => a + b
// `))

// console.log(await splitCode(`
// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>Document</title>
// </head>
// <body>
//   <div>abc</div>
// </body>
// </html>
// `, 'html'))

