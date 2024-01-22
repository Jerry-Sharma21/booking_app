import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />} />
    </Routes>
  </Router>
);

export default App;
