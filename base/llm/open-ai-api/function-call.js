import dotenv from 'dotenv'
import OpenAI from 'openai'

dotenv.config()
const client = new OpenAI()


async function main() {
  const runner = client.beta.chat.completions
    .runFunctions({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: 'How is the weather this week?' }],
      functions: [
        {
          function: getCurrentLocation,
          // 调用函数的参数
          parameters: { type: 'object', properties: {} },
        },
        {
          function: getWeather,
          // 解析参数
          parse: JSON.parse, // or use a validation library like zod for typesafe parsing.
          parameters: {
            type: 'object',
            properties: {
              location: { type: 'string' },
            },
          },
        },
      ],
    })
    .on('message', (message) => console.log(message));

  const finalContent = await runner.finalContent();
  console.log('Final content:', finalContent);
}

async function getCurrentLocation() {
  return 'Boston'; // Simulate lookup
}

async function getWeather(args) {
  const { location } = args;
  if(location === 'Boston') {
    return { temperature: '70F', precipitation: 'rain' };
  }
  return { temperature: '10F', precipitation: 'snow' };
}

main()