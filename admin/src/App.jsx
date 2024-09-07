import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Auth from './views/auth/Auth';
import Dashboard from './views/dashboard/Dashboard';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/auth' element={<Auth />} />

        <Route path='/*' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
