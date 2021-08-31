import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import './App.css'




function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return (
    <>
      <Hello name="react" color="red" isSpecial/>
      <Hello color="pink"/>
      <Counter></Counter>
      <InputSample></InputSample>
    </>
  )
}

export default App;
