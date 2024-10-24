import React from 'react'

export default function ContactView({contact}) {
  return (
    <div>
        <h1>Contacts</h1>
        { contact.email}, {contact.name} <button>&times;</button>
    </div>
  )
}

