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

## 对于不同模型的 Prompt 说明
### Claude
Claude 对 XML 比较敏感。可以在 Prompt 里中加 XML。
```html
<conversation>
  <human>你好,我的名字是John。</human>
  <ai>很高兴认识你,John。我是Claude。</ai>
  <human>Claude,今天是什么日子?</human>
  <ai> <get name="currentDate"/> 今天是<value name="currentDate"/>。 </ai>
</conversation>
```

使用<question></question>思考标签来标注需要思考的内容

> When you reply, first find exact quotes in the FAQ relevant to the user's question and write them down word for word inside <thinking></thinking> XML tags.  This is a space for you to write down relevant content and will not be shown to the user.  Once you are done extracting relevant quotes, answer the question.  Put your answer to the user inside <answer></answer> XML tags.
> [Give Claude room to "think" before responding](https://docs.anthropic.com/claude/docs/give-claude-room-to-think-before-responding)

在 <thinking></thinking> 中展示思考过程。

示例用：
```
H: 问。
A: AI 的回答。
```

## 优化方向
关键字： [APE（Automatic Prompt Optimization）](https://www.promptingguide.ai/techniques/ape)
* [gpt-prompt-engineer](https://github.com/mshumer/gpt-prompt-engineer) 根据需求，生成多个 Prompt。自动评估，挑选里面最好的一条。
* [promptfoo](https://github.com/promptfoo/promptfoo) promptfoo is a tool for testing and evaluating LLM output quality. 评估 prompt 效果的。可以自动化。
* 提升清晰性
  * [betterprompt](https://github.com/krrishdholakia/betterprompt) 衡量困惑度。论文中研究：在广泛的任务，我们表明，较低的困惑的提示，提示符就能够更好地执行任务。

## Prompt 优化
* Prompt 的设计
* 调试
  * 版本管理
  * 不同模型效果对比
* 验证

## 产品
### 优化 Prompt
* [gpt-prompt-engineer](https://github.com/mshumer/gpt-prompt-engineer)
* [Prompt perfect](https://promptperfect.jinaai.cn/)
* [prompt better](https://promptbetter.ai/?twclid=2-cb4uxhu0bwnw6rm30vpnx048)
* [PROMPTMETHEUS](https://promptmetheus.com/) 
PROMPTMETHEUS is a Prompt Engineering IDE, designed to help you automate repetitive tasks and augment your apps and workflows with the mighty capabilities of ChatGPT and other cutting-edge LLMs.不太会用。。。
* [ChatGPT Prompt Generator ](https://huggingface.co/spaces/merve/ChatGPT-prompt-generator) 从一些模版中去搜索。

## 方法论
* [TELer](https://mp.weixin.qq.com/s?__biz=MzIwNzc2NTk0NQ==&mid=2247552652&idx=2&sn=189aca99e5b7a16cf8b0fe260192be2c&scene=21#wechat_redirect) 整个提示指引可以被 TELeR 即轮次（Turn）、表达（Expression）、细节级别（Level of Details）与角色（Role）的首字母组合表达。
* [设计提示的通用技巧](https://www.promptingguide.ai/zh/introduction/tips)
* [LangGPT — Empowering everyone to create high-quality prompts!](https://github.com/yzfly/LangGPT) 结构化 Prompt。[我用这10个Prompt提示词做了产品经理AI助手，效果平替PMAI！](https://mp.weixin.qq.com/s/XZ4XhpEKwcDRBBfINHjUYg)
* [Mr.-Ranedeer-AI-Tutor](https://github.com/JushBJJ/Mr.-Ranedeer-AI-Tutor)

## 评估
* ICL（In-context Learning, ICL）效果的评估方法。 
  * 论文:[InstructEval: Systematic Evaluation of Instruction Selection Methods](https://arxiv.org/pdf/2307.00259.pdf)
  * [放弃评测大模型，普林斯顿大学已经开始评估Prompt了，提出Prompt评估框架](https://zhuanlan.zhihu.com/p/644546392)
  * Prompt 资源:
    * [promptsource](https://github.com/bigscience-workshop/promptsource)
  * 自动 Prompt 生成方法
    * Low Perplexity：由 Gonen 等人提出的根据最小困惑度选择 ChatGPT 生成的 Prompt 方法
    * APE：由 Zhou 等人提出的自动少样本Prompt 生成方法，通过 OpenAI DaVinci 自动生成指令，并依据其在几个验证示例中的准确度对 Prompt 方法进行选择与改进
    * RLPrompt：由 Deng 等人提出的基于强化学习的少样本Prompt 自动生成方法
### Prompt 管理
* [Knit](https://promptknit.com/) Playground + prompt 的历史，保存，在团队内分享

## 资源
* [AIGPT提示工程课程](https://islinxu.github.io/prompt-engineering-note/Introduction/index.html)
* Claude 的
  * [Claude Prompt Design](https://docs.anthropic.com/claude/docs/introduction-to-prompt-design) [Some Tricks](https://docs.anthropic.com/claude/docs/let-claude-say-i-dont-know)
  * [万字教程：Claude 教你写 AI 提示词，可能是最专业的 AI 工程师写的提示工程教程](https://mp.weixin.qq.com/s/tfkpHOs2jhz3UORh0CvU4Q)
* Prompt 资源
  * [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)
  * [Prompt Base](https://promptbase.com/) Prompt Marketplace.
* [Promptify](https://github.com/promptslab/Promptify) 识别自然语言的结果，获得结构化的输出。 NLP， NER 等。
* [Awesome Prompt Engineering](https://github.com/promptslab/Awesome-Prompt-Engineering) 
