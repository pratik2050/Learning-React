import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {

  let myStyle = {
    minHeight: '70vh'
  }

  return (
    <div className='container my-3' style={myStyle}>
      <h4 className='text-center my-4'>Todos Items List</h4>

      {
        props.todos.length === 0 ? "No Todos to Display" :  props.todos.map((todo) => {
          return (
            <>
             <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/> <hr/>
            </>
          )
        })
      }

    </div>
  )
}
