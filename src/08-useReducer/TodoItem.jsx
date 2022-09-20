import React from 'react'

export const TodoItem = ({id, description, done}) => {
  return (
        // TodoItem ... (crear componente todoItem que reciba el toDo)
    
        <li key={ id } className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>{description}</span>
            <button className='btn btn-danger'>Borrar</button>
        </li>
    
  )
}
