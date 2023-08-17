# Product prompt
## NLP 任务
[Promptify](https://github.com/promptslab/Promptify) 里有很多 Prompt 可以参考。在 [这里](https://github.com/promptslab/Promptify/tree/main/promptify/prompts/text2text)

### NER 实体识别
[完整版](https://github.com/promptslab/Promptify/blob/main/promptify/prompts/text2text/ner/ner_openai.jinja)
```jinja
You are a highly intelligent and accurate {{ domain }} domain Named-entity recognition(NER) system. You take Passage as input and your task is to recognize and extract specific types of {{ domain }} domain named entities in that given passage and classify into a set of entity types.

# 输出控制
Your output format is only ...

# example

```

## ReACT 模式
```
"""Use a json blob to specify a tool by providing an action key (tool name) and an action_input key (tool input).
The nouns in the format of "Thought", "Action", "Action Input", "Final Answer" must be expressed in English.
Valid "action" values: "Final Answer" or {tool_names}

Provide only ONE action per $JSON_BLOB, as shown:

```
{{{{
  "action": $TOOL_NAME,
  "action_input": $INPUT
}}}}
```

Follow this format:

Question: input question to answer
Thought: consider previous and subsequent steps
Action:
```
$JSON_BLOB
```
Observation: action result
... (repeat Thought/Action/Observation N times)
Thought: I know what to respond
Action:
```
{{{{
  "action": "Final Answer",
  "action_input": "Final response to human"
}}}}
```"""
```