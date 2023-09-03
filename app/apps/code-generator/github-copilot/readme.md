# GitHub Copilot
使用 GitHub Copilot 的思维转变：描述要实现的功能，是用 Copilot 生成方便，还是直接。

什么时候用：
1. 对 陌生的 API 或领域。
2. 提供编程思路。
3. 规律性很强。根据前面的，很快生成后面的。
4. 有明确/现成的算法名称，生成一大段。

原理：context + examples + history => 预测输出输出。

## 场景
以代码生成为主。

### 工具函数
将注释转化成代码。有意义的函数名，输入输出。
```js
/*
* sum
* input: number, number
* output: number
*/
```

### 测试用例
在要写测试用例的函数后，新起一行写 `// Unit test`。或者用函数名：`test函数名`，也可以加更多的要求：
```js
/*
* test 函数名 use jest
* /
```

### 加注释
```js
// 给 quickSort 函数添加函数说明的注释：
```

### 代码转化
#### TypeScript 转 js
在浏览器控制台运行 ts 代码。
```
// 将 ts 代码转换为 js 代码
// ts 代码
[ts code]
// js 代码
[generated js code]
```

#### js 转 React 组件
```js
// Rewrite this as a React component
var input = document.createElement('input');
input.setAttribute('type', 'text');
document.body.appendChild(input);
var button = document.createElement('button');
button.innerHTML = 'Say Hello';
document.body.appendChild(button);
button.onclick = function() {
  var name = input.value;
  var hello = document.createElement('div');
  hello.innerHTML = 'Hello ' + name;
  document.body.appendChild(hello);
};

// React version:
```

类似的，react 转 vue，vue 转 react。

以及代码的重构。

## Tip
1. Prompt
   1. 明确的指示。包含 背景，输入，输出。当然，在描述某些常见的背景时，输入和输出可以省略。比如两数求和。
   2. 以一个高层次的描述开始你的提示，说明你要求 copilot 做什么。
   3. 可以用 Few shots。如 `Example: ... Desired outcome: ...`
2. 人来做任务分解。为了充分利用GitHub Copilot，您应该将代码分割成更小的函数。确保你在工作的时候写出了好的注释和文档字符串。
3. 上下文
   1. 相关的文件在 Tab 中打开。这些文件会做为 Copilot 的上下文。
   2. 用第三方库的时候，声明第三库和版本。如 `<!-- Use A-Frame version 1.2.0 to create a 3D website https://aframe.io/releases/1.2.0/aframe.min.js -->`
  

## 资源
* [How to use GitHub Copilot: Prompts, tips, and use cases](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)
* [The Ultimate Manual to GitHub Copilot](https://nira.com/github-copilot/)
* [A Beginner's Guide to Prompt Engineering with GitHub Copilot](https://dev.to/github/a-beginners-guide-to-prompt-engineering-with-github-copilot-3ibp)
* [How to get Codex to produce the code you want!](https://microsoft.github.io/prompt-engineering/)
* [Openai Code completion](https://platform.openai.com/docs/guides/code)