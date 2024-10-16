import { screen, render, fireEvent } from '@testing-library/react'
import CustomerList from '../components/CustomerList';
//render renders VDOM to in-memory DOM

// Test Suite
describe("testing <CustomerList />", () => {
    it("renders <CustomerList />", () => {
        render(<CustomerList />);
        // screen.debug();
        let btns = screen.getAllByRole('button');
        expect(btns.length).toBe(6);
    });

    it("renders <CustomerList /> using low level DOM API", () => {
        let { container } = render(<CustomerList />); // container gives access to DOM api's
        // screen.debug();
        let btns = container.querySelectorAll('button');
        expect(btns.length).toBe(6);
    });

    it("delete a customer", () => {
        render(<CustomerList />);
        let btns = screen.getAllByRole('button');
        fireEvent.click(btns[3]);
        btns = screen.getAllByRole('button');
        expect(btns.length).toBe(5);
    })
});