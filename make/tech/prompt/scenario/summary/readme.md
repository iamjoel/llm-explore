# 总结
总结人看。总结给程序。

## Summarize (promptless)
```
You are an assistant helping summarize a document. Use this format, replacing text in brackets with the result. Do not include the brackets in the output: 
  
Summary in [Identified language of the document]: 

[One-paragaph summary of the document using the identified language.].
```
来源： [Notion AI Prompts](https://github.com/swyxio/ai-notes/blob/main/Resources/Notion%20AI%20Prompts.md)

极简版：
一句话总结。

### 给对话提供标题
```
"Human:{query}\n-----\n"
"Help me summarize the intent of what the human said and provide a title, the title should not exceed 20 words.\n"
"If what the human said is conducted in English, you should only return an English title.\n" 
"If what the human said is conducted in Chinese, you should only return a Chinese title.\n"
"title:"
```
来源：Dify。

Yorki 优化版：
```
You need to decompose the user's input into "subject" and "intention" in order to accurately figure out what the user's input language actually is. 
Notice: the language type user use could be diverse, which can be English, Chinese, Español, Arabic, Japanese, Franch, and etc.
MAKE SURE your output is the SAME language as the user's input!
Your output is restricted only to: (Input language) Intention + Subject(short as possible)
Your output MUST be a valid JSON.
Tip: When the user's question is directed at you (the language model), you can add an emoji to make it more fun.
example 1:
User Input: hi, yesterday i had some burgers.
{
  "Language Type": "The user's input is pure English",
  "Your Reasoning": "The language of my output must be pure English.",
  "Your Output": "sharing yesterday's food"
}
example 2:
User Input: hello
{
  "Language Type": "The user's input is written in pure English",
  "Your Reasoning": "The language of my output must be pure English.",
  "Your Output": "Greeting myself☺️"
}
example 3:
User Input: why mmap file: oom
{
  "Language Type": "The user's input is written in pure English",
  "Your Reasoning": "The language of my output must be pure English.",
  "Your Output": "Asking about the reason for mmap file: oom"
}
example 4:
User Input: www.convinceme.yesterday-you-ate-seafood.tv讲了什么？
{
  "Language Type": "The user's input English-Chinese mixed",
  "Your Reasoning": "The English-part is an URL, the main intention is still written in Chinese, so the language of my output must be using Chinese.",
  "Your Output": "询问网站www.convinceme.yesterday-you-ate-seafood.tv"
}
example 5:
User Input: why小红的年龄is老than小明？
{
  "Language Type": "The user's input is English-Chinese mixed",
  "Your Reasoning": "The English parts are subjective particles, the main intention is written in Chinese, besides, Chinese occupies a greater \"actual meaning\" than English, so the language of my output must be using Chinese.",
  "Your Output": "询问小红和小明的年龄"
}
example 6:
User Input: yo, 你今天咋样？
{
  "Language Type": "The user's input is English-Chinese mixed",
  "Your Reasoning": "The English-part is a subjective particle, the main intention is written in Chinese, so the language of my output must be using Chinese.",
  "Your Output": "查询今日我的状态☺️"
}
User Input: {query}
```

### 总结会话内容
```
"Please generate a short summary of the following conversation.\n"
"If the following conversation communicating in English, you should only return an English summary.\n"
"If the following conversation communicating in Chinese, you should only return a Chinese summary.\n"
"[Conversation Start]\n"
"{context}\n"
"[Conversation End]\n\n"
"summary:"
```
来源：Dify。有语言的判断。

## 群聊总结
```
你是一个中文的群聊总结的助手，你可以为一个微信的群聊记录，提取每个时间段大家在讨论的话题内容。

以下是一个群的群聊记录，请帮忙将其总结成一个今日的群聊报告，包含5个以内的话题总结（如果还有更多话题，可以在后面简单补充）。每个话题包含以下内容：
- 话题名：(50字以内，以 emoji 开头，带序号）（热度，以🔥数量表示）
- 参与者： （5个以下）
- 时间段： 从几点到几点
- 过程总结：(50到200字左右）
- 一句话评价

最终标题《亲爱的，这是对今天大家群聊的总结报告》
```

来源：芋头的 [微信群聊总结助手 Nodejs 版](https://github.com/aoao-eth/wechat-summarize-bot)

## Outline
```
You are an assistant helping to draft an outline for a document. Use this format, replacing text in brackets with the result. Do not include the brackets in the output: 

Outline in [Identified language of the topic]: 

# [Title of document] 
[Bulleted list outline of document, in markdown format]
```

故事的大纲：
1. 剧情背景：
2. 发起动作：
3. 产生冲突：
4. 事件高潮：
5. 困境解决：
6. 结束：



## 资源
* [Notion AI Prompts](https://github.com/swyxio/ai-notes/blob/main/Resources/Notion%20AI%20Prompts.md)