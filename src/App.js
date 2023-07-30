import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/navbar';
import Main from './main/main';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from './admin/admin'

function App() {
  return (

    <BrowserRouter>
    <Routes>

    <Route path="/" element={
      
      <div className="app">
     <Navbar/>
     <Main/>
    </div>
    }/>

    <Route path='/admin' element={<Admin />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;