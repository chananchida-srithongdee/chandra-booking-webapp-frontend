import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Discover from './components/Discover/Discover.jsx';
import Offer from './components/Offer/Offer.jsx';
import Offer1 from './components/Offer/Offer1.jsx';
import Booking from './components/Booking/Booking.jsx';
import Superior from './components/Booking/Superior/Superior.jsx';
import Deluxe from './components/Booking/Deluxe/Deluxe.jsx';
import BeachHouse from './components/Booking/BeachHouse/BeachHouse.jsx';
import FamilyPremium from './components/Booking/FamilyPremium/FamilyPremium.jsx';
import ContactUs from './components/Contact/Contact.jsx';
import { homeUrl, discoverUrl, offerUrl, offer1Url, offer2Url, offer3Url, offer4Url,
  bookingUrl, booking1Url, booking2Url, booking3Url, booking4Url, contactUsUrl } from './constants/pathUrl.js';
  
  const App = () => {
    const [navbarBg, setNavbarBg] = useState('');

    return (
    <BrowserRouter>
        <div>
            <Navbar navbarBg={navbarBg}/>
            <Routes>
                <Route path={contactUsUrl} exact element={<ContactUs setNavbarBg={setNavbarBg} />} />
                <Route path={discoverUrl} exact element={<Discover setNavbarBg={setNavbarBg} />} />
                <Route path={homeUrl} exact element={<Home setNavbarBg={setNavbarBg} />} />
                
                <Route path={offerUrl} exact element={<Offer setNavbarBg={setNavbarBg} />} />
                <Route path={offer1Url} exact element={<Offer1 />} />
                {/* <Route path={offer2Url} exact element={<Offer2 />} />
                <Route path={offer3Url} exact element={<Offer3 />} />
                <Route path={offer4Url} exact element={<Offer4 />} /> */}

                <Route path={bookingUrl} exact element={<Booking />} />
                <Route path={booking1Url} exact element={<Superior />} />
                <Route path={booking2Url} exact element={<Deluxe />} />
                <Route path={booking3Url} exact element={<BeachHouse />} />
                <Route path={booking4Url} exact element={<FamilyPremium />} />

                <Route
                    path="*"
                    element={<Navigate to={homeUrl} replace />}
                />
            </Routes>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
