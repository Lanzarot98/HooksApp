import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ toDos = [], onDeleteTodo }) => {

  return (
    
    <ul className='list-group'>
        {
            toDos.map( (toDo)=> (
                <TodoItem
                    key={ toDo.id }
                    toDo = { toDo }
                    onDeleteTodo={ onDeleteTodo }
                />
            ))
        }
    </ul>
    
  )
}
