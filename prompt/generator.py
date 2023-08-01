import streamlit as st
from langchain import PromptTemplate
from langchain.prompts.few_shot import FewShotPromptTemplate
from langchain.output_parsers import PydanticOutputParser
from pydantic import BaseModel, Field, validator
from typing import List

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


# To format the output, we can use the PydanticOutputParser
class Actor(BaseModel):
    name: str = Field(description="name of an actor")
    film_names: List[str] = Field(description="list of names of films they starred in")


actor_query = "Generate the filmography for a random actor."

parser = PydanticOutputParser(pydantic_object=Actor)

prompt = PromptTemplate(
    template="Answer the user query.\n{format_instructions}\n{query}\n",
    input_variables=["query"],
    # The output parser will be used to parse the output of the model
    partial_variables={"format_instructions": parser.get_format_instructions()},
)

st.write(prompt.format(query='Question...'))
'''
The output should be formatted as a JSON instance that conforms to the JSON schema below.

As an example, for the schema {"properties": {"foo": {"title": "Foo", "description": "a list of strings", "type": "array", "items": {"type": "string"}}}, "required": ["foo"]}} the object {"foo": ["bar", "baz"]} is a well-formatted instance of the schema. The object {"properties": {"foo": ["bar", "baz"]}} is not well-formatted.

Here is the output schema:
{"properties": {"name": {"title": "Name", "description": "name of an actor", "type": "string"}, "film_names": {"title": "Film Names", "description": "list of names of films they starred in", "type": "array", "items": {"type": "string"}}}, "required": ["name", "film_names"]}
'''

# 
# https://python.langchain.com/docs/modules/model_io/output_parsers/retry

