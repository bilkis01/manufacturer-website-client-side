import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home'
import Blogs from './Pages/Home/Blogs'
import Navbar from './Pages/Shared/Navbar'
import Login from './Pages/Home/Login';
import Signup from './Pages/Home/Signup';
import ReaquireAuth from './Pages/Home/ReaquireAuth';
import Shop from './Pages/Home/Shop';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders';
import NotFound from './Pages/Shared/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Portfolio from './Pages/Shared/Portfolio';
import User from './Pages/Dashboard/User';
import MyProfile from './Pages/Dashboard/MyProfile';
import Payment from './Pages/Dashboard/Payment';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import AddProduct from './Pages/Dashboard/AddProduct';
import MangaeAllProducts from './Pages/Dashboard/MangaeAllProducts';



function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/shop/:id" element={
          <ReaquireAuth>
            <Shop></Shop>
          </ReaquireAuth>
        } />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/dashboard" element={
          <ReaquireAuth>
            <Dashboard></Dashboard>
          </ReaquireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='user' element={<User></User>}></Route>
          <Route path='manageorders' element={<ManageOrders></ManageOrders>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='mangaeallproducts' element={<MangaeAllProducts></MangaeAllProducts>}></Route>
          <Route path='profile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>

        </Route>
        <Route path="/blogs" element={<Blogs> </Blogs>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<Signup></Signup>} />
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />


    </div>
  );
}

export default App;
