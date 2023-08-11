# gradio use-online-model.py
import gradio as gr
# Use a pipeline as a high-level helper
from transformers import pipeline

# https://huggingface.co/facebook/bart-large-cnn
summarizer = pipeline("summarization", model="facebook/bart-large-cnn")

def summary(content):
  return summarizer(content, max_length=130, min_length=30, do_sample=False)

with gr.Blocks(css='style.css') as demo:
  with gr.Row() as row:
    with gr.Column():
      content = gr.Textbox(lines=10, label="要总结的内容", placeholder="input...")
      run_button = gr.Button('Run', variant="primary")
    with gr.Column():
      gr.Markdown('结果')
      result = gr.Markdown('') # Get the result
    run_button.click(
      fn= summary,
      inputs=[content],
      outputs=[result]
    )
  
demo.launch()