import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MainLayout from './layout/MainLayout';
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainLayout/> } >
            <Route index element={ <HomePage/> } ></Route>
            <Route path='/about' element={<AboutPage/>}></Route>
            <Route path='/Projects' element={<h1>Projects</h1>}></Route>
            <Route path='/Contact' element={<h1>Contact</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
