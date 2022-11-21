import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CheckIcon from '@mui/icons-material/Check';

import Slideshow from '../Slideshow/Slideshow.jsx';
import BookingDetail from './BookingDetail/BookingDetail.jsx';
import Roomdetail from './Roomdetail/Roomdetail.jsx';
import GuestSelect from './GuestSelect/GuestSelect.jsx';
import DateSelect from './DateSelect/DateSelect.jsx';
import Payment from './Payment/Payment.jsx';
import PulseLoading from '../Loading/PulseLoading.jsx';

import styles from './styles.js';

import { getRoomsByDateGuest } from '../../actions/rooms';

const Booking = ({ setNavbarBg }) => {
   const ref = useRef(null);
   const dispatch = useDispatch();

   const initialState = {
      prefix: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      addition: '',
      guest: { adult: 0, child: 0 },
      checkIn_date: '',
      checkOut_date: '',
      breakfast: null,
      roomType: { type: '', title: '', price: 0 },
   };
   const [bookingData, setBookingData] = useState(initialState);
   const [isPayment, setIsPayment] = useState(false);
   const { rooms, isLoading } = useSelector((state) => state.rooms);

   const [finishBooking, setFinishBooking] = useState(false);
   const [isBookingLoading, setIsBookingLoading] = useState(true);

   const conditionFind = bookingData.checkIn_date && bookingData.checkOut_date && bookingData.guest.adult > 0;
   const checkIn = new Date(bookingData.checkIn_date);
   const checkOut = new Date(bookingData.checkOut_date);
   const totalNights = Math.ceil(Math.abs(checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24)) || 0;

   const handleBackToBooking = () => {
      setFinishBooking(false);
   };

   useEffect(() => {
      if (conditionFind) {
         dispatch(getRoomsByDateGuest(bookingData.checkIn_date, bookingData.checkOut_date, bookingData.guest));
      }

      if (bookingData.roomType.title) {
         setIsPayment(true);
      } else if (bookingData.roomType.title === '') {
         setIsPayment(false);
      }
   }, [bookingData]);

   useEffect(() => {
      setNavbarBg('');
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className="w-full">
         <Slideshow displayText={false} />
         <div ref={ref} className="lg:space-x-16 flex flex-col-reverse lg:flex-row justify-center w-full py-32 xl:px-32 md:px-20 ss:px-10 xs:px-8 px-4">
            {finishBooking ? (
               isBookingLoading ? (
                  <div className="lg:w-2/3 w-full caret-transparent flex justify-center">
                     <svg className="animate-spin h-20 w-20 text-primary" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                     </svg>
                  </div>
               ) : (
                  <div className="lg:w-2/3 w-full caret-transparent flex flex-col items-center">
                     <div className="rounded-full w-14 h-14 bg-green-500 flex justify-center items-center mb-5">
                        <CheckIcon color="white" fontSize="large" />
                     </div>
                     <div className="font-bold text-3xl text-primary mb-3">Succesfully Booked</div>
                     <div className="text-xl mb-5 text-center">Check your email for a booking confirmation. We’ll see you soon!</div>
                     <button onClick={handleBackToBooking} className={styles.bookingbtn}>
                        Booking Mores
                     </button>
                  </div>
               )
            ) : isPayment ? (
               <Payment bookingData={bookingData} setBookingData={setBookingData} setIsBookingLoading={setIsBookingLoading} setFinishBooking={setFinishBooking} initialState={initialState} />
            ) : (
               <div className="lg:w-2/3 w-full caret-transparent">
                  <div className="flex ss:flex-row flex-col border-[1px] border-black/20 rounded-lg ">
                     <DateSelect bookingData={bookingData} setBookingData={setBookingData} />
                     <GuestSelect bookingData={bookingData} setBookingData={setBookingData} />
                  </div>
                  <div>
                     <div className="font-bold text-secondary text-3xl my-6 cursor-default">Select Room</div>
                     {rooms.length > 0 && conditionFind ? (
                        isLoading ? (
                           <PulseLoading />
                        ) : (
                           rooms.map((room) => (
                              <div key={room.type}>
                                 <Roomdetail bookingData={bookingData} setBookingData={setBookingData} room={room} scrollRef={ref} />
                              </div>
                           ))
                        )
                     ) : (
                        <div className="sm:text-4xl text-3xl text-primary/50 font-bold text-center mt-20">No Room Match</div>
                     )}
                  </div>
               </div>
            )}
            <div className="lg:justify-start justify-center flex mb-10 caret-transparent">
               <BookingDetail bookingData={bookingData} totalNights={totalNights} />
            </div>
         </div>
      </div>
   );
};

export default Booking;
