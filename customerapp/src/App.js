import './App.css';
import CustomerList from './components/CustomerList';
import ParentComponent from './example/ParentComponent';

function App() {
  return (
    <div className="App">
     <h1>Customer Application</h1>
     <CustomerList />
     <ParentComponent />
    </div>
  );
}

export default App;
