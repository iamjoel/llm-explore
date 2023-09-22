# 开发
## 核心内容
* 接入模型
* Prompt
  * 提取关键信息
  * 格式化输出
* 记忆(Memory): 聊天类应用
* RAG(Retrieval Augmented Generation)/Embedding 相关
  * 意图识别(Intent)。从用户输入的问题中识别出用户的意图或目标。这是RAG模型工作的第一步。开源实现：[Data-Copilot](https://github.com/zwq2018/Data-Copilot)。意图如：
    * 是上下文中提取信息。
    * 总结信息
    * 和之前的聊天结合。比如：上一句中的xx是啥；你(回答)指的xx是啥？
  * 意图实现的方案：利用预训练语言模型是当前意图识别的主流和最有效方法。我们可以fine-tune BERT等模型来获得一个意图分类器,输入用户问题,输出意图标签,从而指导后续的生成过程。
  * 分段策略。大小，重叠
  * 向量数据库。存储和比较。
  * 召回策略。
  * 显示来源：一种是用 Prompt 来实现。
* 知识图谱
* 微调(Fine-Tuning)。有利于减少上下文描述。
* Agent
* 评估

## 现有平台
Agent 平台的交付物是 api。Application 的交付物是 App，带 UI。

* Agent 平台： 手工编排或自动编排。
* Application 平台: 支持 Workflow 或只有单步。
* 基础设施/中间件： LLMOps（要需要持续的调整，如 embedding 的分段等）
  * [Dify](https://dify.ai/) 简单地创造和运营基于 LLM 的 AI 原生应用
  * [毕昇 Bisheng](https://github.com/dataelement/bisheng) 开源大模型应用开发平台，赋能和加速大模型应用开发落地，帮助用户以最佳体验进入下一代应用开发模式。[第四范式](https://www.4paradigm.com/)（上一代人工智能公司，已上市） 下的 [DataElem](http://dataelem.com/contact/team) 搞的。
  * [魔搭](https://modelscope.cn/home) [GitHub](https://github.com/modelscope/modelscope/tree/master)

## 文章
* [Create a CustomGPT And Supercharge your Company with AI  –  Pick the Best LLM](https://blog.abacus.ai/blog/2023/08/10/create-your-custom-chatgpt-pick-the-best-llm-that-works-for-you/?continueFlag=5e3d2cbae140ce2f6662c47eec73b6af) 里面的几个评估的可以参考。
* [改进召回（Retrieval）和引入重排（Reranking）提升RAG架构下的LLM应用效果](https://mp.weixin.qq.com/s/QdBynJnV2S1Rc0LUjzCuLw)