# RAGs
## 是什么
搭建基于私有数据数据聊天的 Streamlit 应用程序。是通过自然语言来聊天交互的方式来编排 RAG 应用。

LlamaIndex 做的。做这个是受到 [GPTs](https://openai.com/blog/introducing-gpts) 的启发。

## 解决了什么问题
快速创建一个可用的 RAG 应用程序。不需要写代码。只需要配置。

## 效果怎么样
效果本质就是用 LlamaIndex 这一套。所以效果和 LlamaIndex 的效果一样。召回用的是最简单的版本：分段，问题匹配分段这种。

加载文件的过程中，挺容易报错的。

## 怎么用
在本地跑: [RAGs](https://github.com/run-llama/rags)。

在 Home 页面顺着流程走就行了。主要做作如下几件事：
1. 这个app的功能。以此来生成 prompt。
2. 设置数据源。文件地址或url。只能支持一个。聊天过程中，设置了一些设置参数的工具。根据用户聊天内容选择这些工具。
3. 设置参数。 
  1. 召回相关参数：top k 的值，分块策略和摘要选项。
  2. LLM 相关参数：LLM，Embedding 模型。

在 RAG 配置可以看到提取到的配置。也可以手动改配置。


启动：
```bsh
conda activate rags
cd demo/rags
streamlit run 1_🏠_Home.py
```

## 资源
* [Introducing RAGs: Your Personalized ChatGPT Experience Over Your Data](https://blog.llamaindex.ai/introducing-rags-your-personalized-chatgpt-experience-over-your-data-2b9d140769b1)