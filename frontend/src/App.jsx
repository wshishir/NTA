import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import DetailsPage from './pages/DetailsPage';

const App = () => {
  return (
    <>
    <div>
      <Routes>
        <Route path='/' element= {<HomePage/>}/>
        <Route path='/create' element= {<CreatePage/>}/>
        <Route path='/note/:id' element= {<DetailsPage/>}/>
      </Routes>
    </div>
    </>
  )};

export default App