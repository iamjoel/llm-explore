import streamlit as st
from langchain import PromptTemplate
from langchain.prompts.few_shot import FewShotPromptTemplate

st.set_page_config(page_title="Prompt Generator: For magical prompt ideas", page_icon="💫", layout='wide')
st.title('Prompt Generator')

inputArea, outputArea = st.columns(2)

with inputArea:
  st.header('Prompt')

  promptTemplateInput = st.text_area("Prompt Template", placeholder="Input variables use: {variable name}", value="Give the antonym of every input", height=200)
  promptTemplate = PromptTemplate.from_template(promptTemplateInput)
  inputVariables = promptTemplate.input_variables
  hasVars = len(inputVariables) > 0
  vars = {}
  hasError = False

  if hasVars:
    st.markdown('## Vars')
    # loop promptTemplate.input_variables and output as input
    for i in range(len(inputVariables)):
      vars[inputVariables[i]] = st.text_input(inputVariables[i])
    if hasVars and any(value == '' for value in vars.values()):
      st.error('Please fill all the variables.')
  
  question = st.text_input('Question', '')
  # output control
  submitted = st.button('Submit')


with outputArea:
  st.header('Result')

  if submitted and not hasError:
    prefix =  promptTemplate.format(**vars)
    fewShows =  FewShotPromptTemplate(
        examples=[
          { 'input': "happy", 'output': "sad" },
          { 'input': "tall", 'output': "short" },
          { 'input': "energetic", 'output': "lethargic" },
          { 'input': "sunny", 'output': "gloomy" },
          { 'input': "windy", 'output': "calm" },
        ], 
        example_prompt= PromptTemplate(
          template = "Input: {input}\nOutput: {output}",
          input_variables=["input", "output"]
        ), 
        suffix="Question: {input}", 
        input_variables=["input"]
    ).format(input=question)
    res = prefix + '\n\n' + fewShows
    st.write(res)



