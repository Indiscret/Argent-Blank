import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './components/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import store from './components/store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
  </Provider>
);