import { render, screen, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples/MultipleCustomHooks';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');


describe('Testing in <MultipleCustomHooks />', () => { 
    
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Should show the default component', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render(<MultipleCustomHooks />);

        expect( screen.getByText('Loading...') )
        expect( screen.getByText('BreakingBad Quotes') )

        // esto agarra el botón pero podemos ser más específicos const nextButton = screen.getByRole('button');
        const nextButton = screen.getByRole('button', { name: 'Next quote' }); 
        // console.log(nextButton.disabled);
        expect( nextButton.disabled ).toBeTruthy();
        // screen.debug();

    });

    test('debe de mostrar un Quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: "Walter White", quote: "I am not in danger, Skyler. I am the danger!" }],
            isLoading: false,
            hasError: null
        });

        render(<MultipleCustomHooks />);
        expect( screen.getByText("I am not in danger, Skyler. I am the danger!") ).toBeTruthy();
        expect( screen.getByText("Walter White") ).toBeTruthy();

        const nextButton = screen.getByRole('button', {name: 'Next quote'});

        expect(nextButton.disabled).toBeFalsy()
    });

    test('should call the increment function', () => { 

        useFetch.mockReturnValue({
            data: [{ author: "Walter White", quote: "I am not in danger, Skyler. I am the danger!" }],
            isLoading: false,
            hasError: null
        });


        render(<MultipleCustomHooks />);
        const nextButton = screen.getByRole('button', {name: 'Next quote'});
        
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();


     });

 });