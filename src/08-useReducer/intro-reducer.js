// mi estado inicial
const initialState = [{
    id: 1,
    toDo: 'Recolectar la piedra del Alma',
    done: false,
}];

const toDoReducer = ( state = initialState, action= {} ) => {

    if ( action.type === '[TODO] add toDo') {
        return [...state, action.payload] // como es un arreglo expando todo el arreglo
    }

    return state; 
}

let toDos = toDoReducer();

const newToDo = {
    id: 2,
    toDo: 'Recolectar la piedra del poder',
    done: false
}

const addToDoAction = {
    type: '[TODO] add toDo',
    payload: newToDo,
}

toDos = toDoReducer( toDos, addToDoAction );


// estaríamos tentados a hacer algo así. pero es algo que no deberíamos hacer
// en react si hacemos una mutación no nos re-dibujaría nada y es una mala práctica cuando mutamos el estado de esta manera  
// toDos.push({
//     id: 2,
//     toDo: 'Recolectar la piedra del poder',
//     done: false
// })

console.log({state: toDos});



