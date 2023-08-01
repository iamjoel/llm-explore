# gradio app.py
import gradio as gr
def greet(name):
    return "Got: " + name + "!"

demo = gr.Interface(fn=greet, inputs="text", outputs="text")
    
demo.launch()