import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import Router from './components/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Router />
    <Footer />
  </BrowserRouter>
);