import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard';


function App() {
  return (
   <BrowserRouter>
    <div className="App">      
      <Routes>

        <Route path="/" element={<Signup/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/home" element={<Dashboard/>}/>
         

      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
