# 当不满足条件时，不拒绝
用 Few-shot 来限制回答的范围。例如
```
<< EXAMPLES >>  
instruction: who is Lady Gaga? 
question: is the instruction out of scope (not related with TiDB)? 
answer: YES  

instruction: how to deploy a TiDB cluster? 
question: is the instruction out of scope (not related with TiDB)? 
answer: NO  

instruction: how to use TiDB Cloud? 
question: is the instruction out of scope (not related with TiDB)? 
answer: NO
```
- [用 LLM 构建企业专属的用户助手](https://zhuanlan.zhihu.com/p/645658201)