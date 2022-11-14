import './App.css';
import {BrowserRouter as Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Testuser from './testuser';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/testing" element={<Testuser/>} /> 
    </Routes>
    </BrowserRouter>
  );
}

export default App;
