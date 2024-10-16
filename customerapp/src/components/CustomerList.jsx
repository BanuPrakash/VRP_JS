import React, { Component } from 'react'
import CustomerRow from './CustomerRow';
import Filter from './Filter';

export default class CustomerList extends Component {
    x = 10; // state but React doesn't handle this
    // react manages state only under "state" member 
    state = {
        "customers": [
            { "id": 1, "firstName": "Rachel", "lastName": "Green", "gender": "female" },
            { "id": 2, "firstName": "Ross", "lastName": "Geller", "gender": "male" },
            { "id": 3, "firstName": "Monica", "lastName": "Geller", "gender": "female" },
            { "id": 4, "firstName": "Phoebe", "lastName": "Buffay", "gender": "female" },
            { "id": 5, "firstName": "Chandler", "lastName": "Bing", "gender": "male" },
            { "id": 6, "firstName": "Joey", "lastName": "Tribuanni", "gender": "female" }
        ]
    }

    deleteCustomer(id) {
        let custs = this.state.customers.filter(c => c.id !== id); // all customers except matching id

        // update the state and re-render
        this.setState({
            "customers": custs
        });

        // avoid this because it doesn't reconcile <<re-rendering>> is not happening
        //  this.state.customers = custs
    }

    render() {
        return (
            <div>
                <Filter />  <br />
                {
                    this.state.customers.map(cust => <CustomerRow customer={cust}
                        delEvent={this.deleteCustomer.bind(this)} />)
                }
            </div>
        )
    }
}
