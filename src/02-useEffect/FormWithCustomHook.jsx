import { useEffect, } from "react"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
    
    const { formState, onResetForm, onInputChange, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    })

    // o podemos hacer esto para retornar username, email y contraseña
    // const { username, email, password } = formState;

    

    return (
        <>
            <h1>form with custom Hook</h1>
            <hr />

            <input 
                type="text"
                className="form-control" 
                placeholder="Username"
                name="username"
                value={username}
                onChange = { onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2" 
                placeholder="luis@google.com"
                name="email"
                value={email}
                onChange = { onInputChange }
            />

            <input 
                type="password"
                className="form-control mt-2" 
                placeholder="Password"
                name="password"
                value={password}
                onChange = { onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2">Borrar</button>
            
        </>
    )
}