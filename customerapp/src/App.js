import { useState } from 'react';
import './App.css';
import CustomerList from './components/CustomerList';
import First from './contextexample/First';
import Parent from './contextexample/Parent';
import ParentComponent from './example/ParentComponent';
import DemoState from './hooks/DemoState';
import UserDetails from './hooks/UserDetails';
import UsersComponent from './hooks/UsersComponent';
import CounterComponent from './reducerexample/CounterComponent';

function App() {
  let [uid, setUid] = useState(1);
  return (
    <div className="App">
     <h1>Customer Application</h1>
     {/* <CustomerList />
     <ParentComponent /> */}
     {/* <Parent>
        <First />
     </Parent> */}
     {/* <DemoState /> */}
     <div className='row'>
      <div className='col-md-4'>
          <UsersComponent setUid={setUid}/>
      </div>
      <div className='col-md-8'>
          <UserDetails uid={uid}/>
      </div>
     </div>
    
    <CounterComponent />
    </div>
  );
}

export default App;
