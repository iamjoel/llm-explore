import os
from dotenv import load_dotenv
import gradio as gr
from langchain.llms import OpenAI
from langchain import PromptTemplate

load_dotenv() 
llm = OpenAI(openai_api_key = os.getenv('OPENAI_API_KEY'))
promptTemplate = PromptTemplate.from_template("""
总结故事的主要内容。故事的主要内容是：{content}
""")

DESCRIPTION = """
# 故事总结
Prompt: {prompt}
""".format(prompt=promptTemplate.template.format(content="..."))

def summary(content):
  # return 'efffefef'
  return llm(promptTemplate.format(content=content))

with gr.Blocks(css='style.css') as demo:
  gr.Markdown(DESCRIPTION)

  with gr.Row() as row:
    with gr.Column():
      content = gr.Textbox(lines=10, label="故事内容", placeholder="input...")
      run_button = gr.Button('Run', variant="primary")
    with gr.Column():
      # result = gr.Textbox(lines=5, label="总结内容", placeholder="Summary")
      gr.Markdown('## 总结内容')
      result = gr.Markdown('') # Get the result
    run_button.click(
      fn= summary,
      inputs=[content],
      outputs=[result]
    )
  
demo.launch()