import React from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Layout from './layouts/Layout';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <p>Home Page</p>
          </Layout>
        }
      />
      <Route
        path="/search"
        element={
          <Layout>
            <p>Search Page</p>
          </Layout>
        }
      />
    </Routes>
  </Router>
);

export default App;
