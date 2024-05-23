
import './App.css';
import About from './components/About';
import Clients from './components/Clients';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Servise from './components/Servise';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home';
import { Auth } from './components/Auth';
import Profile from './components/Profile';
import Login from './components/Login';
import Signup from './components/Signup';
import Superadmin from './components/Superadmin';
import Authentication from './components/Authentication';


function App() {
  return (
    <div className="App">
      <Auth>
   <Navbar/>
   
  

   <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/services' element={<Servise/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/clients' element={<Clients/>} />
          <Route path='/profile'element={
              <Authentication>
                <Profile />
              </Authentication>
            }
          />
          <Route path='/login' element={<Login/>} />
          <Route path='/Signup' element={<Signup/>} />
          <Route path='/superadmin' element={<Superadmin/>} />




   </Routes>
  
   <Footer/>
   </Auth>

    </div>
  );
}

export default App;
