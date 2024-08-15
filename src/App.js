// import logo from './logo.svg';
import React from "react";
// import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";


import Main from "./components/Main";
import BlogDetail from "./components/BlogDetail";
// import ReviewSlider from "./components/ReviewSlider";



function App() {
  return (
   

    <>
    {/* <TestimonialSlider/> */}
      <BrowserRouter>
        <Routes>

        <Route path='/*' element={<Main/>}></Route>

         
        </Routes>
        
      </BrowserRouter>

      {/* <ReviewSlider/> */}

      {/* <BlogDetail/> */}
    
      
      
    </>
  );
}

export default App;
