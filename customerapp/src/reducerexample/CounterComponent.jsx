import React, { useReducer } from 'react'
import countReducer from './countReducer'


let initialState = {
    count : 0
}
export default function CounterComponent() {
    let [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <div>
        Count : {state.count} <br />
        <button type='button' onClick={() => dispatch({type : 'INCREMENT', payload: 5})}>INCREMENT</button>
        <button type='button' onClick={() => dispatch({type : 'DECREMENT'})}>DECREMENT</button>
        <button type='button' onClick={() => dispatch({type : 'RESET'})}>RESET</button>
    </div>
  )
}
