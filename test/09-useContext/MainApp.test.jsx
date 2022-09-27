import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { MainApp } from '../../src/09-useContext/MainApp';


describe('Testing in <MainApp />', () => { 
    
    test('should show HomePage', () => { 
        
        render( 
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('HomePage') ).toBeTruthy(); // que exista este texto
        // screen.debug();
    });
    
    test('should show LoginPage', () => { 
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('LoginPage') ).toBeTruthy(); // que exista este texto
        // screen.debug();
    });
    test('should show About', () => { 
        
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp /> 
            </MemoryRouter>
        );

        expect( screen.getByText('AboutPage') ).toBeTruthy(); // que exista este texto
        // screen.debug();
    });

});

