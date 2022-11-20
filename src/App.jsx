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
import RoomDetails from './components/RoomDetails/RoomDetails.jsx';
import Allevents from './components/Allevents/Allevents.jsx';
import EventDetails from './components/EventDetails/EventDetails.jsx';

import { homeUrl, discoverUrl, offerUrl, bookingUrl, roomDetailUrl, contactUsUrl, alleventUrl } from './constants/pathUrl.js';

const App = () => {
   const [navbarBg, setNavbarBg] = useState('');

   return (
      <BrowserRouter>
         <div>
            <Navbar navbarBg={navbarBg} />
            <Routes>
               <Route path={contactUsUrl} exact element={<ContactUs setNavbarBg={setNavbarBg} />} />
               <Route path={discoverUrl} exact element={<Discover setNavbarBg={setNavbarBg} />} />
               <Route path={homeUrl} exact element={<Home setNavbarBg={setNavbarBg} />} />

               <Route path={offerUrl} exact element={<Offers setNavbarBg={setNavbarBg} />} />
               <Route path={offerUrl + '/details/:id'} exact element={<OfferDetails setNavbarBg={setNavbarBg} />} />

               <Route path={alleventUrl} exact element={<Allevents setNavbarBg={setNavbarBg} />} />
               <Route path={alleventUrl + '/details/:id'} exact element={<EventDetails setNavbarBg={setNavbarBg} />} />

               <Route path={bookingUrl} exact element={<Booking setNavbarBg={setNavbarBg} />} />

               <Route path={roomDetailUrl + '/:id'} exact element={<RoomDetails setNavbarBg={setNavbarBg} />} />

               <Route path="*" element={<Navigate to={homeUrl} replace />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   );
};

export default App;
