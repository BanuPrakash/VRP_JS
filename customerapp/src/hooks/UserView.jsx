import React from 'react'

export default function UserView({user, setUid}) {
let {id, name, email} = user;
  return (
    <div onMouseEnter={() => setUid(id)}>
        {name}, &nbsp; {email} 
    </div>
  )
}
