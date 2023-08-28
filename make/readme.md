# 开发
## 核心内容
* 接入模型
* Prompt
  * 提取关键信息
  * 格式化输出
* 记忆(Memory): 聊天类应用
* RAG(Retrieval Augmented Generation)/Embedding 相关
  * 分段策略。大小，重叠
  * 向量数据库。存储和比较。
  * 召回策略。
  * 显示来源
* 微调(Fine-Tuning)。有利于减少上下文描述。
* Agent
* 评估

## 现有平台
Agent 平台的交付物是 api。Application 的交付物是 App，带 UI。

* Agent 平台： 手工编排或自动编排。
* Application 平台: 支持 Workflow 或只有单步。
* 基础设施/中间件： LLMOps（要需要持续的调整，如 embedding 的分段等）
  * Dify
  * [魔搭](https://modelscope.cn/home) [GitHub](https://github.com/modelscope/modelscope/tree/master)

## 文章
* [Create a CustomGPT And Supercharge your Company with AI  –  Pick the Best LLM](https://blog.abacus.ai/blog/2023/08/10/create-your-custom-chatgpt-pick-the-best-llm-that-works-for-you/?continueFlag=5e3d2cbae140ce2f6662c47eec73b6af) 里面的几个评估的可以参考。
* [改进召回（Retrieval）和引入重排（Reranking）提升RAG架构下的LLM应用效果](https://mp.weixin.qq.com/s/QdBynJnV2S1Rc0LUjzCuLw)