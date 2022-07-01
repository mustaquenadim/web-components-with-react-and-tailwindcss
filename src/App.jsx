import React from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Button from './components/Button.jsx';
import SelectDropdown from './components/SelectDropdown.jsx';

function App() {
  return (
    <>
		<Header />
      	<Routes>
        	<Route path="/" element={<Home />} />
		  	<Route path="components/button" element={<Button />} />
		  	<Route path="components/select-dropdown" element={<SelectDropdown />} />
      	</Routes>
    </>
  );
}

export default App;