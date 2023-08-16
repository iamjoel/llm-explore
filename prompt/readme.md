# Prompt
Prompt Engineer.

功能点：
* prompt 模版。
  * 替换 prompt 中的变量
* 示例(Few Shots)
  * 多个示例
  * 从多个示例中选择。根据长度，想过心，重叠等。
* 输出格式化
  * 指定形状的 JSON
  * 自定义
  * 生成出错时的重试

## 核心 Prompt
* 代理类型的
  * AutoGPT
  * HuggingGPT
  * ReAct 模式

## 优化方向
关键字： [APE（Automatic Prompt Optimization）](https://www.promptingguide.ai/techniques/ape)
* [gpt-prompt-engineer](https://github.com/mshumer/gpt-prompt-engineer) 根据需求，生成多个 Prompt。自动评估，挑选里面最好的一条。
* 提升清晰性
  * [betterprompt](https://github.com/krrishdholakia/betterprompt) 衡量困惑度。论文中研究：在广泛的任务，我们表明，较低的困惑的提示，提示符就能够更好地执行任务。

## Prompt 优化
* Prompt 的设计
* 调试
  * 版本管理
  * 不同模型效果对比
* 验证

## 产品
* [gpt-prompt-engineer](https://github.com/mshumer/gpt-prompt-engineer)
* [Prompt perfect](https://promptperfect.jinaai.cn/)
* [PROMPTMETHEUS](https://promptmetheus.com/) 
PROMPTMETHEUS is a Prompt Engineering IDE, designed to help you automate repetitive tasks and augment your apps and workflows with the mighty capabilities of ChatGPT and other cutting-edge LLMs.不太会用。。。
* [ChatGPT Prompt Generator ](https://huggingface.co/spaces/merve/ChatGPT-prompt-generator) 从一些模版中去搜索。

## 资源
* [AIGPT提示工程课程](https://islinxu.github.io/prompt-engineering-note/Introduction/index.html)
* Prompt 资源
  * [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
  * [Prompt Base](https://promptbase.com/) Prompt Marketplace.
* [Promptify](https://github.com/promptslab/Promptify) 识别自然语言的结果，获得结构化的输出。 NLP， NER 等。
* [Awesome Prompt Engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) 
