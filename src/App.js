import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banners from './Components/Pages/Banners/Banners';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

const App = () => {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/banners' element={<Banners></Banners>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/signup' element={<SignUp></SignUp>} ></Route>

      
    </Routes>
    <Footer></Footer>
      
    </>
  );
};

export default App;