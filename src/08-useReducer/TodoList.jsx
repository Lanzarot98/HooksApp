import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ toDos = [], onDeleteTodo, onToggleTodo }) => {

  return (
    
    <ul className='list-group'>
        {
            toDos.map( (toDo)=> (
                <TodoItem
                    key={ toDo.id }
                    toDo = { toDo }
                    onDeleteTodo={ onDeleteTodo }
                    onToggleTodo={ onToggleTodo }
                />
            ))
        }
    </ul>
    
  )
}
