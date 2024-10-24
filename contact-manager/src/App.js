import './App.css';
import { connect } from 'react-redux';
import ContactView from './ContactView';
function App(props) {

  return (
    <div className="App">
      <h1>Hello, {props.displayName}</h1>
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

}
