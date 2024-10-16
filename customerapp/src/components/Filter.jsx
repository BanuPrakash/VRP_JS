import React from 'react'

// export default function Filter(props) {
    export default function Filter({filterEvent}) {
  return (
    <div>
        <input type='text' placeholder='search by name' onChange={(event) => filterEvent(event.target.value)}/>
    </div>
  )
}
