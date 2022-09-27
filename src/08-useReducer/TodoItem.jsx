import React from 'react'

export const TodoItem = ({ toDo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span 
          className={`align-self-center ${ toDo.done ? 'text-decoration-line-through': '' }`}
          onClick={() => onToggleTodo(toDo.id)}
          aria-label='span'
        >
          { toDo.description }
        </span>
        <button 
          className='btn btn-danger'
          onClick={ ()=> onDeleteTodo( toDo.id ) }
        >
          Delete
        </button>
    </li>
  )
}
