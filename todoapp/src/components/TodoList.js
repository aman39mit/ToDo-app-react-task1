import React from 'react'

function TodoList(props) {
  return (
    <li className='listItem'key={props.index}>
        {props.item}
        <span className='icons'>
        <i class="fa-solid fa-trash-can icon-delete"
        onClick={e=>{
            props.deleteListItem(props.index)
        }}></i>
        </span>
    </li>
  )
}

export default TodoList
