import { PromptTemplate } from "langchain/prompts";

async function getPrompt(prompt, valuesObj) {
  const template = PromptTemplate.fromTemplate(prompt);
  const formattedPrompt = await template.format(valuesObj);
  return formattedPrompt
}

const formattedPrompt = await getPrompt(`You are a naming consultant for new companies.
What is a good name for a company that makes {product}?`, {
  product: "colorful socks",
})

console.log(formattedPrompt)


// const prompt = new PromptTemplate({
//   template: "{foo}{bar}",
//   inputVariables: ["foo", "bar"]
// });

// const paritalPrompt = await prompt.partial({
//   foo: "foo",
// });

// const formattedPrompt = await paritalPrompt.format({
//   bar: "baz",
// });

// console.log(formattedPrompt)

/*
  You are a naming consultant for new companies.
  What is a good name for a company that makes colorful socks?
*/