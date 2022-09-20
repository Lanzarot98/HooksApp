import { useEffect, useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
    // {
    //     id: new Date().getTime(), // para generar un id temporal
    //     description: 'Recolectar la piedra del alma',
    //     done: false,
    // },
    // {
    //     id: new Date().getTime()*3,
    //     description: 'Recolectar la piedra de poder',
    //     done: false,
    // },
]

const init = () => {
    // si es null el JSON.parse, hace la evaluación del array vacío y lo retorna
    // y si lo primero tiene valor, entonces eso es lo que se retorna
    return JSON.parse( localStorage.getItem('toDos')) || [];
}

export const TodoApp = () => {

    const [ toDos, dispatch ] = useReducer( todoReducer, initialState, init );

    useEffect (() => {
        localStorage.setItem('toDos', JSON.stringify( toDos ));
    }, [toDos])

    const handleNewTodo = ( toDo ) => {
        // aquí es el todo que quiero insertar, es decir
        // el payload que quiero enviar a mi reducer
        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        }
        dispatch( action );
    }
    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove ToDo',
            payload: id
        });
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle ToDo',
            payload: id
        });
    }

  return (
    <>
        <h1>TodoApp: 10, <small>pending: 2</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList 
                    toDos={ toDos } 
                    onDeleteTodo={ handleDeleteTodo } 
                    onToggleTodo = { handleToggleTodo }
                />
            </div>

            <div className='col-5'>
                    
                <h4>Add TODO</h4>
                <hr />
                <TodoAdd onNewTodo={ handleNewTodo } />
                
            </div>
            
        </div>

    </>
  )
}
