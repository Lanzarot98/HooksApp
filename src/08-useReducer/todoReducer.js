// {type: '[TODO] Remove Todo', payload: id} // en el payload podemos enviar solo el id, o todo el toDo
export const todoReducer = ( initialState = [], action ) =>{
    switch ( action.type ) {
        case '[TODO] Add ToDo':
            return [ ...initialState, action.payload ]
            
        case '[TODO] Remove Todo':
            return initialState.filter((toDo) => toDo.id !== action.payload);

        default:
            return initialState;
    }
}