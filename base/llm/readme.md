# 大规模语言模型(LLM)
LLM 决定了一个应用的能力上限。

## 核心能力
### 语义的理解
使用体验好。相比传统的基于关键字的搜索。降低了用户的使用成本。

基于这，可以做：情感识别，翻译，总结，续写等等。

### 推理能力(Reasoning)
推理能力包括：常识推理，数学，编程等。

有了推理能力，就能：
* 根据上下文选择工具的能力。
* 规划的能力。

该能力对 LLM 对要求比较高。大部分开源模型推理能力很弱： [AgentBench: Evaluating LLMs as Agents](https://arxiv.org/abs/2308.03688)

## 不足的地方
目前 LLM 存在的问题：
* 幻觉。一本正经的胡说八道。
* Max Token 限制。可以通过 Embedding 部分解决。
* 注意力的问题。
* 不能联网。可以通过使用插件实现。

## 模型
### 不开源/商用模型
* OpenAI 系列
  * 文本生成类模型：GPT 3.5, GPT 4
  * Embedding 模型
  * 语音转文字模型
* Anthropic 系列
  * Claude
* [Bard](https://bard.google.com/)。 Google
  * [PaLM2](https://ai.google/discover/palm2/)
* [Cohere](https://cohere.com/)
* 国内
  * 讯飞星火
  * 文心一言
  * 通义千问
  * MiniMax

### 开源
* Llama2。可商用开源模型的领头羊。Meta 出品。很多开源模型都是基于 Llama 微调出来的。
* Falcon
* 国内
  * 智谱。清华大学。
    * ChatGLM。
    * [CodeGeeX2](https://github.com/THUDM/CodeGeeX2)。代码生成模型。
  * 百川智能。前搜狗王小川。

## 原理
### Transformer
LLM 模型很多都采用 Transformer 模型。GPT 的全称是 Generative Pre-Trained Transformer。

Transformer 是一种基于注意力机制(Attention Mechanism)的神经网络模型,被广泛用于自然语言处理(NLP)领域。

其主要特点及优势包括:

1. 整个模型仅基于注意力机制,不再使用 RNN 或 CNN 结构。
2. 并行计算,计算效率更高。
3. 可以建模远距离依赖关系。
4. 编码器-解码器(Encoder-Decoder)结构,可快速高效地对序列进行转换。
5. 可学习位置编码,为模型提供序列顺序信息。
6. 多头注意力机制,可以关注文本不同位置的信息。
7. 前馈全连接网络逐位置进行特征提取。

Transformer 模型经常被用在机器翻译、文本生成、填空题等NLP任务上。代表性的Transformer模型包括:

* Transformer (原始论文模型)
* GPT (Improving Language Understanding by Generative Pre-Training)
* BERT (Bidirectional Encoder Representations from Transformers)
* T5 (Text-To-Text Transfer Transformer)

相关文章
* [Hugging face 文章](https://huggingface.co/learn/nlp-course/zh-CN/chapter1/1?fw=pt)
* [OpenAI ChatGPT（一）：十分钟读懂 Transformer](https://zhuanlan.zhihu.com/p/600773858)
* [Transformer模型详解（图解最完整版）](https://zhuanlan.zhihu.com/p/338817680)

