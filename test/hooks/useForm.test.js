import { renderHook, act } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";


describe('Testing useForm', () => { 

    const initialForm = {
        name: 'Luis',
        email: 'luis@google.com'
    }
    
    test('Should return default information', () => {
            
        const { result } = renderHook( ( ) => useForm( initialForm ) );
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        })
    });

    test('should change the form name', () => { 
        const { result } = renderHook( ( ) => useForm( initialForm ) );
        const { onInputChange, } = result.current;
        const newValue = 'Juan';
       

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue }});
        });
        
        expect( result.current.name ).toBe(newValue);
        expect( result.current.formState.name ).toBe(newValue);
    });

    test('should reset the form', () => { 
        const { result } = renderHook( ( ) => useForm( initialForm ) );
        const { onResetForm, onInputChange } = result.current;
        const newValue = 'Juan';

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue }});
            onResetForm();
        });
        
        expect( result.current.name ).toBe(initialForm.name);
        expect( result.current.formState.name ).toBe(initialForm.name);
    });
});