import React from 'react';
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
  return (
    <>
        <div className='container'>
          <h4 className='my-3 '>ToDo's List</h4>
          {props.todos.length === 0 ? 'No items to display':
            props.todos.map((todo) => {
              return (<TodoItem todo = {todo} key={todo.sno} onDelete = {props.onDelete}></TodoItem>)
            })
          }
          
        </div>
    </>
    
  )
}
