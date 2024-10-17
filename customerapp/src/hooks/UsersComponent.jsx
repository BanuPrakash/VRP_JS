import React, { useEffect, useState } from 'react'
import UserView from './UserView';

export default function UsersComponent({setUid}) {
    let [users, setUsers] = useState([]);
   
    // componentDidMount
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsers(data));
    }, []);
    return (
        <div>
            <h1>Users</h1>
            {
                users && users.map(user => <UserView user={user} key={user.id} setUid={setUid}/>)
            }
        </div>
    )
}
