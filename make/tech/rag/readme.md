# RAG
RAG 太难做了。场景多，链路长，工具多。做 60 分容易，做 80 分很难，但用户期待的是 90 甚至 100 分。业界还没有做到 90 分的产品。

效果做的最好的是 [Perplexity](https://www.perplexity.ai/)。开源的 LlamaIndex 提供了一堆工具，但都很塑料。

## 流程
清洗，分段，嵌入，召回。

## 向量数据库
推荐：[qdrant](https://qdrant.tech/)

## 评估
### [ragas](https://github.com/explodinggradients/ragas)
ragas是一个框架，它可以帮助你评估你的检索增强生成（Retrieval Augmented Generation，简称RAG）管道，这是一类使用外部数据来增强LLM（语言模型学习）上下文的应用程序。RAG管道是近年来人工智能领域的重要研究方向，主要是通过检索和生成的相结合，以提高模型的生成质量和准确性。ragas框架为此提供了评估工具，使得开发者和研究者能够更好地理解其性能和效果，进一步优化其模型。

```python
from ragas import evaluate
from datasets import Dataset
import os

os.environ["OPENAI_API_KEY"] = "your-openai-key"

# prepare your huggingface dataset in the format
# Dataset({
#     features: ['question', 'contexts', 'answer'],
#     num_rows: 25
# })

dataset: Dataset

results = evaluate(dataset)
# {'ragas_score': 0.860, 'context_relevancy': 0.817,
# 'faithfulness': 0.892, 'answer_relevancy': 0.874}
```

衡量维度：
* Faithfulness: 测量所生成的答案相对于给定上下文的信息一致性。如果答案中有任何不能从上下文中推断出来的声明，则会受到惩罚。 => 是否存在幻觉。
* Context Relevancy: 测量检索到的上下文与问题的相关程度。理想情况下，上下文应该只包含回答问题所必需的信息。上下文中冗余信息的存在受到惩罚。  => 召回的准确性，没有冗余信息。
* Context Recall: 使用注释的答案作为基础事实来测量检索到的上下文的召回。 => 召回的准确性。预期与实际情况的比较。注释的答案是预期。
* Answer Relevancy：根据定义的方面（如无害性、正确性等）来判断提交。

ragas_score 是一个综合的分数，它是上述四个分数的的调和平均值。

## 应用项目
* [SEC Insights](https://github.com/run-llama/sec-insights) A real world full-stack application using LlamaIndex. [run-llama](https://github.com/run-llama) 下的好多项目感觉都可以关注下。

## 工具
* [Text Splitter Playground](https://langchain-text-splitter.streamlit.app/) 体验不同分段策略的效果。[GitHub](https://github.com/langchain-ai/text-split-explorer)。作者: [Harrison Chase](https://twitter.com/hwchase17) 是 LangChain 的。

## 其他
* [用 LLM 构建企业专属的用户助手](https://zhuanlan.zhihu.com/p/645658201) PingCAP 的人写的，写的不错。