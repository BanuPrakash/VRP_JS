import { screen, render, fireEvent } from '@testing-library/react'
import CustomerRow from '../components/CustomerRow';

// unit testing using mocks

describe("testing <CustomerRow /> in isolation", () => {
    // mock the dependencies
    let callback = jest.fn();
    let cust = {
        id: 24,
        firstName: 'George',
        lastName: 'Clooney',
        gender: 'male'
    }
    it("renders <CustomerRow />", () => {
        render(<CustomerRow customer={cust}
            key={cust.id}
            delEvent={callback} />);
        //screen.debug();
       let element = screen.getByText(/George/);
       expect(element).toBeInTheDocument();
    });

    it("delete a Customer <CustomerRow />", () => {
        render(<CustomerRow customer={cust}
            key={cust.id}
            delEvent={callback} />);
            let btn = screen.getByRole('button');
            fireEvent.click(btn);
            expect(callback).toBeCalledTimes(1);
            expect(callback).toBeCalledWith(24);
    })
})
