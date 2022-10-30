import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Home from './components/Home/Home.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Footer from './components/Footer/Footer.jsx';
import Discover from './components/Discover/Discover.jsx';
import Offers from './components/Offers/Offers.jsx';
import OfferDetails from './components/OfferDetails/OfferDetails.jsx';
import Booking from './components/Booking/Booking.jsx';
import ContactUs from './components/Contact/Contact.jsx';
import { homeUrl, discoverUrl, offerUrl, bookingUrl, booking1Url, booking2Url, booking3Url, booking4Url, contactUsUrl } from './constants/pathUrl.js';
  
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
                
                <Route path={offerUrl} exact element={<Offers setNavbarBg={setNavbarBg} />} />
                <Route path={offerUrl + '/details/:id'} exact element={<OfferDetails setNavbarBg={setNavbarBg} />} />

                <Route path={bookingUrl} exact element={<Booking setNavbarBg={setNavbarBg} />} />

                <Route
                    path="*"
                    element={<Navigate to={homeUrl} replace />}
                />
            </Routes>
            <Footer />
        </div>
    </BrowserRouter>
    
  );
}

export default App;
