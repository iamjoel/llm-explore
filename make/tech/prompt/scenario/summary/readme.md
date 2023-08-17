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