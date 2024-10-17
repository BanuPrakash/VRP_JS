import React, { Component } from 'react'

export default class NameComponent extends Component {
 shouldComponentUpdate(newProps, newState) {
    if(this.props.name === newProps.name) {
        return false;
    }
    return true;
 }
  render() {
    console.log("NameComponent renders!!!")
    return (
      <div>Name in NameComponent {this.props.name} </div>
    )
  }
}
