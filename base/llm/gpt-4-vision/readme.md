# GPT Vision
## 应用
### [Draw a ui](https://github.com/SawyerHood/draw-a-ui)

手画 UI 转化为 Code。Tailwind 来做 CSS。

用 GPT 4 的 Vision 模型来把图片转代码。核心 Prompt：  
> const systemPrompt = `You are an expert tailwind developer. A > user will provide you with a
>  low-fidelity wireframe of an application and you will return 
>  a single html file that uses tailwind to create the website. > Use creative license to make the application more fleshed out.
> if you need to insert an image, use placehold.co to create a > placeholder image. Respond only with the html file.`
> https://github.com/SawyerHood/draw-a-ui/blob/main/app/api/toHtml/route.ts
