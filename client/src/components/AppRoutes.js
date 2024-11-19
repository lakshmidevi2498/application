import React from 'react';
import SignupPage from '../pages/SignupPage'
import SigninPage from '../pages/SigninPage';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import ProductsPage from '../pages/ProductsPage'; 
import { Provider } from 'react-redux';
import CartPage from '../pages/CartPage';
import WishlistPage from '../pages/WishlistPage';
import CheckoutPage from '../pages/CheckoutPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PaymentPage from '../pages/PaymentPage';
import AddressForm from '../components/AddressForm';
import AddressPage from '../pages/AddressPage';
import AddressDetailsPage from '../pages/AddressDetailsPage';
import AdminLoginComponent from '../components/AdminLoginComponent';
import InnerProductsPage from '../pages/InnerProductsPage';
import AboutUsPage from '../pages/AboutUsPage';
import OrderHistoryPage from '../pages/OrderHistoryPage';
import OrderDetailsPage from '../pages/OrderDetailsPage';
import OrderhistoryUpdatedPage from '../pages/OrderhistoryUpdatedPage';
import { useEffect } from 'react';
import PrivateRoute from './PrivateRoutes';
import { Route, Routes } from 'react-router-dom';
import ProductsRoute from './ProductsRoute';

const AppRoutes = () => {


  return (
    <>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<SigninPage />} />
        <Route path="/categories" element={<ProductsRoute/>}>
          <Route path=":id" element={<ProductsPage />} />
        </Route>
        <Route path="/innerProducts" element={<InnerProductsPage />} />
        <Route path="/admin" element={<AdminLoginComponent />} />
        <Route path="/aboutus" element={<AboutUsPage />} />


        <Route path="/profile" element={<PrivateRoute>  <ProfilePage />  </PrivateRoute>} />
        <Route path="/cartpage" element={<PrivateRoute>  <CartPage /> </PrivateRoute>} />
        <Route path="/wishlist" element={<PrivateRoute> <WishlistPage /> </PrivateRoute>} />
        <Route path="/checkout" element={<PrivateRoute> <CheckoutPage />  </PrivateRoute>} />
        <Route path="/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
        <Route path="/address" element={<PrivateRoute><AddressPage /></PrivateRoute>} />
        <Route path="/addressdetails" element={<PrivateRoute><AddressDetailsPage /></PrivateRoute>} />
        <Route path="/orderhistory" element={<PrivateRoute><OrderHistoryPage /></PrivateRoute>} />
        <Route path="/orderdetails" element={<PrivateRoute><OrderDetailsPage /></PrivateRoute>} />
        <Route path="/historyorder" element={<PrivateRoute><OrderhistoryUpdatedPage /></PrivateRoute>} />
      </Routes>



      {/* <BrowserRouter>
    <Routes>
    <Route path="/profile" element = {<ProfilePage/>}/>
      <Route path="/cartpage" element={<CartPage/>}/>
      <Route path = "/wishlist" element = {<WishlistPage/>}/> 
      <Route path = "/checkout" element ={<CheckoutPage/>}/>
      <Route path = "/payment" element ={<PaymentPage/>}/>
      <Route path = "/address" element ={<AddressPage/>}/>
      <Route path = "/addressdetails" element ={<AddressDetailsPage/>}/> 
      
      <Route path ="/aboutus" element={<AboutUsPage/> }/> 
      <Route path ="/orderhistory" element={<OrderHistoryPage/> }/>
      <Route path ="/orderdetails" element={<OrderDetailsPage/> }/> 
      <Route path ="/historyorder" element={<OrderhistoryUpdatedPage/> }/> 
      </Routes>
    </BrowserRouter> */}
    </>
  )
}

export default AppRoutes