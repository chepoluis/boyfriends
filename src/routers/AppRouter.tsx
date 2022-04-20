import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Declaration } from '../components/Declaration';
import Home from '../Home';

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/declaration' element={ <Declaration />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
