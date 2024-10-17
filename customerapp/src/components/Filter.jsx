import React from 'react'

// export default function Filter(props) {
    export default function Filter(props) {
      let {filterEvent} = props;
  return (
    <div>
        <input type='text' placeholder='search by name' onChange={(event) => filterEvent(event.target.value)}/>
    </div>
  )
}

// let product = { "id": 1, "firstName": "Rachel", "lastName": "Green", "gender": "female" };
// let {firstName} = product;