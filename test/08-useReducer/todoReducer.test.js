import { todoReducer } from "../../src/08-useReducer/todoReducer";



describe('Testing todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]


    test('should return the initial state', () => {
        const newState = todoReducer( initialState, {} );
        expect( newState ).toBe( initialState );
    });

    test('should add toDo', () => {

        const action = {
            type: '[TODO] Add ToDo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        // console.log(newState);
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );

    });
    
    test('should delete a toDo', () => {

        const action = {
            type: '[TODO] Remove ToDo',
            payload: 1 // este de acuerdo a al método es el action.payload
        };
        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 0 );
        // expect( newState ).toContain( initialState[0] );
    });
    
    test('should do the toggle of toDo', () => {

        const action = {
            type: '[TODO] Toggle ToDo',
            payload: 1  
        };
        const newState = todoReducer( initialState, action );
        // console.log(newState);
        expect( newState[0].done ).toBeTruthy();

        const newState2 = todoReducer( initialState, action );
        expect( newState2[0].done ).toBeTruthy(); 
        // hago esto para asegurar que se esta cambiando tanto para verdadero o falso
    });

});