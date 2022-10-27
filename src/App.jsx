import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Discover from './components/Discover/Discover.jsx';
import ContactUs from './components/Contact/Contact.jsx';
import { homeUrl, discoverUrl, contactUsUrl } from './constants/pathUrl.js';

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Navbar />
            <Routes>
                <Route path={contactUsUrl} exact element={<ContactUs />} />
                <Route path={discoverUrl} exact element={<Discover />} />
                <Route path={homeUrl} exact element={<Home />} />
                {/* <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                /> */}
            </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
