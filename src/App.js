import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Protect from './components/Protect';
import Fitness from './components/Fitness';
import Trainerdashbaord from './components/Trainerdashbaord';
import Workouts from './components/Workouts';


function App() {
  return (
   <BrowserRouter>
    <div className="App">      
      <Routes>  

        <Route path="/" element={<Signup/>}/>

        <Route path="/login" element={<Login/>}/>

        <Route path="/home" element={ <Protect child={<Dashboard/>}/> }/>

        <Route path="/profile" element={ <Protect child={<Profile/>}/> }/>

        <Route path="/bmi" element={ <Protect child={<Fitness/>}/> }/>

        <Route path="/trainerdashboard" element={ <Protect child={<Trainerdashbaord/>}/> }/>

        <Route path="/workouts" element={ <Protect child={<Workouts/>}/> }/>
      



      </Routes>
    </div>
   </BrowserRouter>
  );
}

export default App;
