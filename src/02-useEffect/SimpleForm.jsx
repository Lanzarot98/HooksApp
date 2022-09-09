import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'luis@google.com',
    })

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    // se dispara una sola vez
    useEffect(()=> {
        // console.log('useEffect called!');
    }, []);

    // cambio en el formulario
    useEffect(()=> {
        // console.log('formState called!');
    }, [formState]);

    // email change
    useEffect(()=> {
        // console.log('email called!');
    }, [email]);



    return (
        <>
            <h1>Simple Form</h1>
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
            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}