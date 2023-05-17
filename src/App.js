import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import {Container} from './Component/index';
import {Header, Footer } from './Sections/index';
import Home from './Pages/Home/Home';
import Browse from './Pages/Browse/Browse';
import Fortnite from './Pages/Fortnite/Fortnite';
import Profile from './Pages/Profile/Profile';
const App = () => {
  return (
    <>
      <Router>

         <Header/>
         <Container>

           <Routes> 
            <Route path='/' element={<Home/>}/>
            <Route path='/Browse' element={<Browse/>}/>
            <Route path='/Fortnite' element={<Fortnite/>}/>
            <Route path='/Profile' element={<Profile/>}/>
         </Routes>

         </Container>
         <Footer/>

      </Router>
    </>
  );
}

export default App;

