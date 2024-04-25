import './App.css';
import Checkout from './Checkout.js';
import Header from './components/Header.js';
import Home from './Home.js';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

import Login from './Login.js';
import { useEffect } from 'react';
import { auth } from './firabase.js';
import { useStateValue } from './StateProvider.js';
import Footer from './components/Footer.js';
import Payment from './Payment.js';
import Orders from './Orders.js';

function App() {

  const [{}, dispatch] = useStateValue();

  const promise = loadStripe('pk_test_51P0xsjLY0KJvGmO7YLC1lwyb6fvlZhKzXjvvlqolYxqXJ60PZLctYubYgvrd8iKh6qhD5IuM9mDQwmax56Bp9sUf00BXARoZr7');

  useEffect(() => {

    auth.onAuthStateChanged(user => {

      if(user) {
        // If the user logged in
        dispatch({
          type: 'SET_USER',
          user: user
        })


      } else {
        // If the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }

    })
  }, [])

  return (

      <div className="app">
        <Routes>

          {/* Home page */}
          <Route path='/' element={
            <>
              {/* Header */}
              <Header />
              {/* Home */}
              <Home />

              <Footer />
            </>}>
          </Route>

          {/* Checkout page */}
          <Route path='/checkout' element={
            <>
              {/* Header */}
              <Header />
              <Checkout />
            </>}>
          </Route>

          {/* Payment page */}
          <Route path='/payment' element={
            <>
              {/* Header */}
              <Header />
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            </>}>
          </Route>

          {/* Login page */}
          <Route path='/login' element={
            <>
              <Login />
            </>}>
          </Route>

          {/* Orders page */}
          <Route path='/orders' element={
            <>
              <Header />
              <Orders />
            </>
          }>

          </Route>

        </Routes>
      </div>
  );
}

export default App;
