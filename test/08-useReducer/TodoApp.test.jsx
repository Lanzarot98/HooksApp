import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodo } from '../../src/hooks/useTodo';

jest.mock('../../src/hooks/useTodo')



describe('Testing in <TodoApp />', () => { 
    
    useTodo.mockReturnValue({
        toDos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ],
        toDosCount: 2, 
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    });


    test('should show the correct component', () => { 
        
        render( <TodoApp /> )
        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
        // screen.debug();
    })

    
});