import React, { useState } from 'react'

export default function DemoState() {
 let [name, setName] = useState("Roger");
 let [age, setAge] = useState(18);
//  let [customers, setCustomers] = useState([]);

  return (
    <div>
        <h1>Use State Example</h1> 
        Name {name} <br />
        Age {age} <br />
        <button type='button' onClick={() => setAge(age + 1)}>Change Age</button>
    </div>
  )
}

