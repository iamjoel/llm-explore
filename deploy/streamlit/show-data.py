import streamlit as st
import pandas as pd
import numpy as np

# 画 table
df = pd.DataFrame({
  'first column': [1, 2, 3, 4],
  'second column': [10, 20, 30, 40]
})

df

chart_data = pd.DataFrame(
  np.random.randn(20, 3),
  columns=['a', 'b', 'c'])

'折线图'
st.line_chart(chart_data)
'Chart 图'
st.area_chart(chart_data)
'Bar 图'
st.bar_chart(chart_data)