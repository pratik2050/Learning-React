import React from 'react'
import TodoItem from './TodoItem';

export default function Todos(props) {
  return (
    <div className='container'>
      <h4 className='text-center'>Todos Items List</h4>

      {
        props.todos.length === 0 ? "No Todos to Display" :  props.todos.map((todo) => {
          return <TodoItem todo = {todo} key = {todo.sno} onDelete = {props.onDelete}/> 
        })
      }

    </div>
  )
}
