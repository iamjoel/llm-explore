import os
from dotenv import load_dotenv
import gradio as gr
from langchain.llms import OpenAI
from langchain import PromptTemplate

load_dotenv() 
promptTemplate = PromptTemplate.from_template("""
总结内容。内容是：{content}
""")

DESCRIPTION = """
# 故事总结
Prompt: {prompt}
""".format(prompt=promptTemplate.template.format(content="bala bala"))

def summary(content, apiKey):
  openai_api_key = apiKey if apiKey != '' else os.getenv('OPENAI_API_KEY')
  if openai_api_key is None:
    raise gr.Error('请输入 openai_api_key')
    return
  llm = OpenAI(openai_api_key = openai_api_key)
  return llm(promptTemplate.format(content=content))

with gr.Blocks(css='style.css') as demo:
  gr.Markdown(DESCRIPTION)

  with gr.Row() as row:
    with gr.Column():
      openai_api_key = gr.Textbox(label="OPENAI API Key", placeholder="sk-xxx")
      content = gr.Textbox(lines=10, label="要总结的内容", placeholder="input...")
      run_button = gr.Button('Run', variant="primary")
    with gr.Column():
      # result = gr.Textbox(lines=5, label="总结内容", placeholder="Summary")
      gr.Markdown('结果')
      result = gr.Markdown('') # Get the result
    run_button.click(
      fn= summary,
      inputs=[content, openai_api_key],
      outputs=[result]
    )
  
demo.launch()