import streamlit as st
import time

st.set_page_config(page_title="Movie Suggestion", page_icon="🎬") #, layout="wide"
st.title('Movie Suggestion')

## Summary
col1, col2, col3 = st.columns(3)
with col1:
  st.metric(label="Star", value="1.5 K", delta="0.2 K")
with col2:
  st.metric(label="Fork", value="300", delta="80")
with col3:
  st.metric(label="PR", value="800", delta="-50")

## Chat
message = st.chat_message("assistant")
message.write("Welcome to use this app!")

# with st.chat_message("user"):
#     st.write("Hello 👋")

# management state
prompt = st.chat_input("Say something")
if 'promptRecords' not in st.session_state:
  st.session_state.promptRecords =  []

promptRecords = st.session_state.promptRecords

if prompt:
  # message = st.chat_message("assistant")
  # message.write("Got: " + prompt)
  promptRecords.append(prompt)

# loop promptRecords
for i in range(len(promptRecords)):
  with st.chat_message("user"):
    st.write(promptRecords[i])

  time.sleep(0.5)

  with st.chat_message('assistant'):
    st.write('Got ' + promptRecords[i] + 'from you.')



## Form
col1, col2 = st.columns(2)
# st.header('This is a header')

with col1:
  st.header('Doc')
  st.markdown('This is an app about **give movie suggestion**.')
with col2:
# inputs
  st.header('Form')
  type = st.text_input('电影类型', '')
  submitted = st.button('提交', disabled=type == '')

  if submitted:
    st.write('当前电影类型是', type)
    st.toast('Your question submit successfully!', icon='😍')
    st.balloons() # cool~
    # st.snow() # cool

# st.dataframe(my_dataframe)
# st.table(data.iloc[0:10])
# st.json({'foo':'bar','fu':'ba'})

