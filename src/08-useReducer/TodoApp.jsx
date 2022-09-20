import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { useTodo } from '../hooks/useTodo';


export const TodoApp = () => {

    const { toDos, toDosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

  return (
    <>
        <h1>TodoApp: { toDosCount }, <small>pending: { pendingTodosCount  }</small></h1>
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
