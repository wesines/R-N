import React from 'react';

import './App.css';
import HomePage from './layouts/HomePage/HomePage';
import { Footer } from './layouts/NavBarAndFooter/Footer';
import {Navbar}  from './layouts/NavBarAndFooter/Navbar';
import { SearchBooksPage } from './layouts/SearchBooksPage/SearchBooksPage';

export const  App=() =>{
  return (
    <div className="App">
     <Navbar/>
     <HomePage/>
     {/* <SearchBooksPage/> */}
     <Footer/>
    </div>
  );
}

export default App;
