import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Typography } from '@mui/material';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
