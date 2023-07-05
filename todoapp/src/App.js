import logo from './logo.svg';
import './App.css';
import Tododinput from './components/Tododinput';
import { useCallback, useState } from 'react';
import TodoList from './components/TodoList';

function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText !== " ")
    setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key)=>{
    console.log("shiva", key)
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo(...newListTodo)
  }

  return (
    <div className = "main-container">
      <div className="center-container">
      <Tododinput addList={addList} />
      <h1 className='app-heading'>Todo</h1>
      <>{console.log("listtoDo" ,listTodo)}</>
      {listTodo.length > 0 && listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} index={i} item={listItem} deleteListItem={deleteListItem} />
        )
      })}
      </div>
    </div>
  );
}

export default App;
