import React from 'react'
import About from './About';
import Clients from './Clients';
import Header from './Header';
// import Navbar from './Navbar';
import Projects from './Projects';
import Servise from './Servise';
// import Footer from './Footer';


export default function Home() {
  return (
    <div>
  
   <Header/>
   <About/>
   <Servise/>
   <Projects/>
   <Clients/>
   
    </div>
  )
}
