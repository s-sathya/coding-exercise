import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from '../common/header';
import HomePage from './pages/home-page';

function index() {
  return (
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<HomePage />} />
      </Routes >
    </Router>
  )
}

export default index;
