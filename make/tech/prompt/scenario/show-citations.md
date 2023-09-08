# 显示引用来源
## Prompt
```
根据 <context> 中的内容来回答问题。

如果无法从 <context> 中找到问题的答案。回复：“对不起，根据你提供的上下文，我无法回答你的问题”

输出按照 <output> 中的格式：
<output>
回答

## 引用
1. 回答中第一个引用的上下文的标题
2. 回答中第二个引用的上下文的标题
...
</output>

<example>
Human: 创建 React 项目的命令是什么
Assistant:
快速创建 react 项目的命令为[1]：
```tsx
  npx create-react-app 项目名称
  npx create-react-app 项目名称 --template typescript
```

## 引用
1. 快速创建 react 项目的命令

</example>

<context>
  <item>
    <id>a153</id>
    <title>快速创建 react 项目的命令</title>
    <content>
      ```tsx
      npx create-react-app 项目名称
      npx create-react-app 项目名称 --template typescript
      ```
    </content>
  </item>

  <item>
    <id>a158</id>
    <title>React 相关的 Tyscript 类型</title>
    <content>
    ```tsx
      React.ReactNode // chilren
      JSX.Element // 元素
      React.ComponentType // 组件类型 
      React.RefObject<HTMLDivElement> // ref

      // 样式
      React.CSSProperties

      // 事件
      React.SyntheticEvent<EventTarget> // 事件
      React.ChangeEvent<HTMLInputElement> // change事件
      React.KeyboardEvent<HTMLInputElement> // 键盘事件
      React.MouseEvent<HTMLElement> // 鼠标事件
      React.UIEvent<HTMLElement> // 滚动事件
    ```
    </content>
  </item>
</context>

问题是： 创建 React 项目的命令是什么 以及 React 相关的 Tyscript 类型 有哪些
```
