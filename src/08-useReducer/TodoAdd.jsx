import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: ''

    })

    const onFormSubmit = (event) => {
        event.preventDefault();
        if(description.length <= 1) return;

        const NewTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        }

        onNewTodo(NewTodo)
        onResetForm(); // para que se borre la caja de texto cuando hago submit
    }

  return (
    <>
    {/* {id: new Date()..., description:'', done: false} */}
        <form onSubmit={onFormSubmit} >
            <input 
                type="text"
                placeholder="What is there to do?"
                className="form-control"
                name="description"
                onChange={ onInputChange }
                value={ description }
            />

            <button 
                type="submit"
                className='btn btn-outline-primary mt-1'
            >
                add task
            </button>
        </form>
    </>
  )
}
