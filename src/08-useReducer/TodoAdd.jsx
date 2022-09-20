import React from 'react'
import { useState } from 'react';

export const TodoAdd = ({onNewTodo}) => {

    const [inputToDo, setInputToDo] = useState('')
    
    const ToDo = {
        id: new Date().getTime(),
        description: inputToDo,
        done: false,
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onNewTodo(ToDo);
    }

    const onInputChange = ({target}) => {
        setInputToDo(target.value);
    }

  return (
    <>
    {/* {id: new Date()..., description:'', done: false} */}
        <form onSubmit={onSubmit} >
            <input 
                type="text"
                placeholder="¿Qué hay que hacer?"
                className="form-control"
                onChange={onInputChange}
                
            />

            <button 
                type="submit"
                className='btn btn-outline-primary mt-1'
            >
                Agregar
            </button>
        </form>
    </>
  )
}
