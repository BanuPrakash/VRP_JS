import './App.css';
import CustomerList from './components/CustomerList';
import First from './contextexample/First';
import Parent from './contextexample/Parent';
import ParentComponent from './example/ParentComponent';

function App() {
  return (
    <div className="App">
     <h1>Customer Application</h1>
     {/* <CustomerList />
     <ParentComponent /> */}
     <Parent>
        <First />
     </Parent>
    </div>
  );
}

export default App;
