import React from 'react'
import { useDispatch } from 'react-redux'

export default function ContactView({ contact }) {
    let dispatch = useDispatch();
    return (
        <div>
            <h1>Contacts</h1>
            {contact.email}, {contact.name} <button
                onClick={() => dispatch({ type: 'REMOVE_CONTACT', payload: contact.email })}>
                &times;</button>
        </div>
    )
}

