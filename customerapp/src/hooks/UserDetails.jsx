import React, { useEffect, useState } from 'react'

export default function UserDetails({uid}) {
    let [user, setUser] = useState();
    // componentDidUpdate
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + uid)
        .then(response => response.json())
        .then(data => setUser(data));
    }, [uid])
  return (
    <div>
        <h1>User Details</h1>
        {
            user && (
                <div>
                    Name : {user.name} <br />
                    Phone : {user.phone} <br />
                    Website: {user.website} <br />
                    Company : {user.company.name} <br />
                </div>
            )
        }</div>
  )
}
