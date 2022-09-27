import { renderHook, waitFor } from '@testing-library/react';
import { useFetch } from '../../src/hooks/useFetch';



describe('Testing in useFetch', () => {

    const url = `https://www.breakingbadapi.com/api/quotes/1`;
    const datas = {
        quote_id: 1,
        quote: "I am not in danger, Skyler. I am the danger!",
        author: "Walter White",
        series: "Breaking Bad"
    }

    test('should return initial state', () => { 
        
        const { result } = renderHook( ( ) => useFetch(url));
        const { data, isLoading} = result.current;

        expect( data ).toBe(null);
        expect( isLoading ).toBeTruthy();
    });

    test('should return a data of breaking bad', async() => { 

        const { result } = renderHook( ( ) => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        const { isLoading } = result.current;
        
        console.log(result.current.isLoading);
        // expect( data ).toBe(data);
        // expect( isLoading ).toBeFalsy();
     })

})