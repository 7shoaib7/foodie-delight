import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Typography } from '@mui/material';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
        <Typography variant="h4" component="h1" gutterBottom>
          FOODIEDELIGHT - Admin Dashboard
        </Typography>
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
        </Routes>
    </Router>
  );
}

export default App;
