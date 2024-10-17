import React, { Component } from 'react'
import AgeComponent from './AgeComponent'
import NameComponent from './NameComponent'

export default class ParentComponent extends Component {
    state = {
        name: "Brad",
        age: 54
    }

    changeAge() {
        this.setState({
            age: this.state.age + 1
        })
    }
    render() {
        console.log("Parent Renders!!");
        return (
            <div>
                In Parent Name : {this.state.name} <br />
                In Parent Age : {this.state.age} <br />
                <button type='button' onClick={this.changeAge.bind(this)}>Change Age</button> <br />
                <AgeComponent age={this.state.age} /> <br />
                <NameComponent name={this.state.name} />
            </div>
        )
    }
}
