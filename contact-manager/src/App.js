import './App.css';
import { connect } from 'react-redux';
import ContactView from './ContactView';
import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
function App(props) {
  let [email, setEmail] = useState();
  let [name, setName] = useState();

  function doSubmit() {
    let contact = {
      email,
      name
    }

    props.addContact(contact);
  }
  return (
    <div className="App">
      <h1>Hello, {props.displayName}</h1>

      <form>
        <button type='button' onClick={props.clearContacts}>Clear All</button> <br />
        Email <input type='email' onChange={(evt) => setEmail(evt.target.value)}/> <br />
        Name <input type='text' onChange={(evt) => setName(evt.target.value)}/> <br />
        <button onClick={doSubmit} type='button'>Add Contact</button>
      </form>
      {
        props.contactList && props.contactList.map(contact => <ContactView contact={contact} key={contact.email} />)
      }
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

function mapStateToProps(state) {
  {
    return {
      contactList: state.contacts,
      displayName: state.profile.name
    }
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addContact: (contact) => dispatch({type: 'ADD_CONTACT', payload: contact}),
    clearContacts: () => dispatch({type:'CLEAR_CONTACTS'})
  }
}
