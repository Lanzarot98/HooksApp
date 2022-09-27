import { renderHook, act } from '@testing-library/react';
import { useCounter } from '../../src/hooks/useCounter';

describe('Testing useCounter', () => {
    test('should return values for default', () => {
        
        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );


    });

    test('debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter(100) );
        const { counter } = result.current;

        expect( counter ).toBe(100);
    });

    test('should increment the counter', () => { 
        const { result } = renderHook( () => useCounter() );
        const { increment } = result.current;

        act( () => {
            increment();
            increment(2);
        } )
        expect( result.current.counter ).toBe(13);
    })
    
    test('should decrement the counter', () => { 
        const { result } = renderHook( () => useCounter(100) );
        const { decrement } = result.current;

        act( () => {
            decrement();
            decrement(2);
        } )
        expect( result.current.counter ).toBe(97);
    })
    
    test('should reset the counter', () => { 
        const { result } = renderHook( () => useCounter(20) );
        const { reset, increment, decrement } = result.current;

        act( () => {
            increment(2);
            decrement(10);
            reset();
        } )
        expect( result.current.counter ).toBe(20);
    })
});








