import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(), // para generar un id temporal
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime()*3,
        description: 'Recolectar la piedra de poder',
        done: false,
    },
]

export const TodoApp = () => {

    const [ toDos, dispatch ] = useReducer( todoReducer, initialState );

    const handleNewTodo = ( toDo ) => {
        // aquí es el todo que quiero insertar, es decir
        // el payload que quiero enviar a mi reducer
        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        }
        dispatch( action );
    }

  return (
    <>
        <h1>TodoApp: 10, <small>pendientes: 2</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList toDos={ toDos } />
            </div>

            <div className='col-5'>
                    
                <h4>Agregar TODO</h4>
                <hr />
                {/* TodoAdd que tiene la emisión de onNewTodo( todo )*/}
                {/* {id: new Date()..., description:'', done: false} */}
                <TodoAdd onNewTodo={ handleNewTodo } />
                {/* Fin TodoAdd */}
            </div>
            
        </div>

    </>
  )
}
