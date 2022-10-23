import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Navbar />
            <Routes>
                <Route path="/home" exact element={<Home />} />
                <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
