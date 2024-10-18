import React, { useReducer, useState } from 'react'
import countReducer from './countReducer'


let initialState = {
    count : 0
}
export default function CounterComponent() {
    let [state, dispatch] = useReducer(countReducer, initialState);
    let [no, setNo] = useState();

    function doIncrement() {
        dispatch({type : 'INCREMENT', payload: no});
    }

  return (
    <div>
        Count : {state.count} <br />
        <input type='text' onChange={(evt) => setNo(+evt.target.value)}/> <br />
        <button type='button' onClick={() => doIncrement()}>INCREMENT</button>
        <button type='button' onClick={() => dispatch({type : 'DECREMENT'})}>DECREMENT</button>
        <button type='button' onClick={() => dispatch({type : 'RESET'})}>RESET</button>
    </div>
  )
}
