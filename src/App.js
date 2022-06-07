import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import SignUp from './Components/Pages/SignUp/SignUp';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './Components/Pages/Blog/Blog';
import Inventories from './Components/Pages/Inventories/Inventories';
import NotFound from './Components/Pages/NotFound/NotFound';
import RequireAuth from './Components/Pages/RequireAuth/RequireAuth';
import ItemDetails from './Components/Pages/Inventories/Item/ItemDetails/ItemDetails';
import ManageInventories from './Components/Pages/Inventories/ManageInventories/ManageInventories';
import AddItem from './Components/Pages/Inventories/AddItem/AddItem';
import MyItem from './Components/Pages/Inventories/MyItem/MyItem';


const App = () => {
  return (
    <div className='relative'>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/home' element={<Home></Home>} ></Route>
      <Route path='/myitems' element={<MyItem></MyItem>} ></Route>
      <Route path='/additems' element={<AddItem></AddItem>} ></Route>
      <Route path='/blog' element={<Blog></Blog>} ></Route>
      <Route path='/inventories' element={<Inventories></Inventories>} ></Route>
      <Route path='/manageinventories' element={<ManageInventories></ManageInventories>} ></Route>
      
        <Route path='/inventory/:id' element={<RequireAuth>
          <ItemDetails></ItemDetails>
          </RequireAuth>}></Route>
      <Route path='/login' element={<Login></Login>} ></Route>
      <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      <Route path='*' element={<NotFound></NotFound>} ></Route>
      </Routes>
    <Footer></Footer>
    </div>
  );
};

export default App;