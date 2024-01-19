import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './style.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import reportWebVitals from './reportWebVitals';
import SignInPage from './components/customers/SignInPage';
import SignUpPage from './components/customers/SignUpPage';
import ResetPswrd from './components/customers/ResetPswrd';
import CheckEmail from './components/customers/CheckEmail';
import Verification from './components/customers/Verification';
import CreateNewPswrd from './components/customers/CreateNewPswrd';
import HomePage from './components/customers/HomePage';
import ProductListPage from './components/customers/ProductListPage';
import ProductDetailPage from './components/customers/ProductDetailPage';
import CartPage from './components/customers/CartPage';
import CheckOutPage from './components/customers/CheckOutPage';
import ContactDetailPage from './components/customers/ContactDetailPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SignInPage/>}></Route>
      <Route path='/signup-page' element={<SignUpPage/>}></Route>
      <Route path='/reset-password' element={<ResetPswrd/>}></Route>
      <Route path='/check-email' element={<CheckEmail/>}></Route>
      <Route path='/verification' element={<Verification/>}></Route>
      <Route path='/createnew-pass' element={<CreateNewPswrd/>}></Route>
      <Route path='/home-page' element={<HomePage/>}></Route>
      <Route path='/list-page' element={<ProductListPage/>}></Route>
      <Route path='/detail-page' element={<ProductDetailPage/>}></Route>
      <Route path='/cart-page' element={<CartPage/>}></Route>
      <Route path='/check-out-page' element={<CheckOutPage/>}></Route>
      <Route path='/contact-detail-page' element={<ContactDetailPage/>}></Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
