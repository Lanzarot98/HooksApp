import React from 'react'

export const TodoItem = ({ toDo, onDeleteTodo }) => {
  return (
    <li className='list-group-item d-flex justify-content-between'>
        <span className='align-self-center'>{ toDo.description }</span>
        <button 
          className='btn btn-danger'
          onClick={ ()=> onDeleteTodo( toDo.id ) }
        >
          Delete
        </button>
    </li>
  )
}
