import { fireEvent, render, screen } from "@testing-library/react"
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage"



describe('Testing in <LoginPage />', () => { 

    test('should show the component without the user', () => { 
        
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
     
    });
     
     test('should call the setUser when is clicked the button', () => { 

        const mockSetUser = jest.fn();

        render(
            <UserContext.Provider value={{user: null, setUser: mockSetUser}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const setUserButton = screen.getByRole('button', {name: 'Set user'});
        fireEvent.click( setUserButton );

        expect( mockSetUser ).toHaveBeenCalledWith({"email": "luis-389@google.com", "id": 123, "name": "Luis"});
 
    });

});