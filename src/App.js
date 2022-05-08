import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Banners from './Components/Pages/Banners/Banners';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Components/Pages/Blog/Blog';



const App = () => {
  return (
    <div>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/blog' element={<Blog></Blog>} ></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
};

export default App;