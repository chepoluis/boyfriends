import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Declaration } from '../components/Declaration';
import { FinalMessage } from '../components/FinalMessage';
import Home from '../components/Home';

export const AppRouter: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/declaration' element={ <Declaration />} />
          <Route path='/message' element={ <FinalMessage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
