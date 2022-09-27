import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem"



describe('Testing <TodoItem />', () => { 

    const toDo = {
        id: 1,
        describe: 'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('should show the pending ToDo', () => { 
        
        render( 
            <TodoItem 
                toDo={ toDo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        // console.log( spanElement.className );
        expect( spanElement.className ).toContain('align-self-center')
        expect( spanElement.className ).not.toContain('text-decoration-line-through')

    });
    
    test('should show the ToDo completed', () => { 
        
        toDo.done = true;

        render( 
            <TodoItem 
                toDo={ toDo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={onDeleteTodoMock}
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through')

    });

    test('the span should call the toggleTodo when clicked', () => { 
        
        render( 
            <TodoItem 
                toDo={ toDo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );

        expect( onToggleTodoMock ).toHaveBeenCalledWith( toDo.id );
    });
    
    test('The button should call the DeleteTodo', () => { 
        
        render( 
            <TodoItem 
                toDo={ toDo } 
                onToggleTodo={ onToggleTodoMock } 
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const buttonElement = screen.getByRole('button', {name: 'Delete'});
        fireEvent.click( buttonElement );

        expect( onDeleteTodoMock ).toHaveBeenCalledWith( toDo.id );
    });
})



