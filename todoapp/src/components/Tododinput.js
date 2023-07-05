import React, { useState } from 'react'

function Tododinput(props) {
  const [inputText,setInputText] = useState(' ');
  return (
    <div className="input-container">
        <input type="text" className='input-box-todo' placeholder='Enter your Todo'
        value={inputText}
        onChange={e=>{
          setInputText(e.target.value)
        }}></input>
        <button className='add-btn'
        onClick={()=>{
          props.addList(inputText)
          setInputText(" ")
        }}>Add</button>
        <div>{inputText}</div>
    </div>
  )
}

export default Tododinput
