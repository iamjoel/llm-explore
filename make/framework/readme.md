# Framework
* Langchain 可以从里面找一些场景的代码实现。
* [llama_index](https://github.com/jerryjliu/llama_index)
* Semantic Kernel
* [Guidance](https://github.com/guidance-ai/guidance)

## Memory(记忆)
记忆本质上依赖的是总结的能力。


### [Zep](https://docs.getzep.com/)
> A long-term memory store for LLM applications

Zep，一个用于存储、总结、嵌入、索引和丰富长期记忆（聊天记录）的应用，实现了渐进式总结、实体提取、嵌入混合搜索等现阶段主流的长期记忆处理方案。
核心 Prompt：https://github.com/getzep/zep/blob/main/pkg/extractors/prompts.go

实体提取
```
You are an AI assistant helping a human keep track of facts about relevant people,
places, and concepts in their life. Update the summary of the provided entity in the "Entity" section based on the last
line of your conversation with the human. If you are writing the summary for the first time, return a single sentence.
The update should only include facts that are relayed in the last line of conversation about the provided entity, and
should only contain facts about the provided entity.

If there is no new information about the provided entity or the information is not worth noting (not an important or
relevant fact to remember long-term), return the existing summary unchanged.

Full conversation history (for context):
{.History}

Entity to summarize:
{.Entity}

Existing summary of {entity}:
{.Content}

Last line of conversation:
Human: {.Input}
Updated summary:
```
