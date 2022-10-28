import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Discover from './components/Discover/Discover.jsx';
import Offer from './components/Offer/Offer.jsx';
import Offer1 from './components/Offer/Offer1.jsx';
import Offer2 from './components/Offer/Offer2.jsx';
import Offer3 from './components/Offer/Offer3.jsx';
import Offer4 from './components/Offer/Offer4.jsx';
import { homeUrl, discoverUrl,offerUrl,offer1Url,offer2Url,offer3Url,offer4Url } from './constants/pathUrl.js';

const App = () => {
  return (
    <BrowserRouter>
        <div>
            <Navbar />
            <Routes>
                <Route path={discoverUrl} exact element={<Discover />} />
                <Route path={homeUrl} exact element={<Home />} />
                <Route path={offerUrl} exact element={<Offer />} />
                <Route path={offer1Url} exact element={<Offer1 />} />
                <Route path={offer2Url} exact element={<Offer2 />} />
                <Route path={offer3Url} exact element={<Offer3 />} />
                <Route path={offer4Url} exact element={<Offer4 />} />
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
