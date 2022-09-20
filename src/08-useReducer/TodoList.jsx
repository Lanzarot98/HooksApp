import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({toDos}) => {

  return (
    <>
        <ul className='list-group'>
            {
                toDos.map( (toDo)=> (
                    <TodoItem
                        key={toDo.id}
                        {...toDo}
                    />
                ))
            }
        </ul>
    </>
  )
}
