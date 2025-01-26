import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from './pages/HomePage';
import MainLayout from './layout/MainLayout';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <MainLayout/> } >
            <Route index element={ <HomePage/> } ></Route>
            <Route path='/Skills' element={<h1>Skills</h1>}></Route>
            <Route path='/Projects' element={<h1>Projects</h1>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
