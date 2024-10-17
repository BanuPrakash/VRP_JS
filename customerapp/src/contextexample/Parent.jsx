import React, { Component, createContext } from 'react'

export const UserContext = createContext(); // global placeholder

export default class Parent extends Component {
    state = {
        "avatar": "myprof.png",
        "displayName": "Harry"
    }

    render() {
        return (
            <UserContext.Provider value={{"avatar": this.state.avatar, "name": this.state.displayName}}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

// <Parent>
//     <A />
//     <B />
// </Parent>

// <Parent>
//     <G />
//     <F />
//     <H />
// </Parent>