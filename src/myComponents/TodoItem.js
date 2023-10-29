import React from 'react'

export const TodoItem = ({todo , onDelete}) => {
  return (
    <div>
      <hr></hr>
      <p className='h4 my-3'>{todo.title}</p>
      <p>{todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={() => {onDelete(todo)}}>Delete</button>
      <hr></hr>
      
    </div>
  )
}
