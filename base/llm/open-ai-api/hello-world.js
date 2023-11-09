import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"]
});

async function blockedOutput() {
  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
  // chatCompletion:
  // {
  //   id: 'chatcmpl-8IppKNUKXhz6kF4lDr36Gu67gRpZJ',
  //   object: 'chat.completion',
  //   created: 1699499818,
  //   model: 'gpt-3.5-turbo-0613',
  //   choices: [ { index: 0, message: {"role":"assistant","content":"This is a test."}, finish_reason: 'stop' } ],
  //   usage: { prompt_tokens: 12, completion_tokens: 5, total_tokens: 17 }
  // }
  console.log(`
    response: ${JSON.stringify(chatCompletion.choices[0].message)}
    token useage: ${chatCompletion.usage.total_tokens}
    chat id: ${chatCompletion.id}
  `)
}

async function steamingOutPut() {
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

await blockedOutput()

steamingOutPut()