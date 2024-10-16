import React, { Component } from 'react'

export default class CustomerRow extends Component {
    // props : data passed from parent to child
    render() {
        // ES6 Destructuring...
        let { id, firstName, lastName, gender } = this.props.customer;
        return (
            <div>
                {firstName} &nbsp; {lastName} &nbsp; {gender} &nbsp;
                <button type='button'>Delete</button>
            </div>
        )
    }
}
