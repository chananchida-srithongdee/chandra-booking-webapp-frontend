import React from 'react';
import styles from './styles.js';

import BookRoom from './BookRoom.jsx';

const BookingDetail = ({ bookingData, totalPayment, totalNights }) => {
  const { guest, checkInDate, checkOutDate, roomsCount } = bookingData;
  
  return (
    <div className="w-96 bg-primary flex flex-col justify-center px-8 py-6 rounded-xl h-fit">
        <div className="font-bold text-secondary text-2xl text-shadow-xl mb-3">Your Stay</div>
        <div className="flex justify-between mb-3">
          <div>
            <div className={styles.headText}>Check In</div>
            <div className={styles.subText}>{checkInDate}</div>
            <div className={styles.subsubText}>After 2:00 PM</div>
          </div>
          <div>
            <div className={styles.headText}>Check Out</div>
            <div className={styles.subText}>{checkOutDate ? checkOutDate : 'No check out date'}</div>
            <div className={styles.subsubText}>Before 12:00 PM</div>
          </div>
        </div>
        <div className="py-10 border-y-[1px] border-white/50 mb-3">
          <div className={`${styles.subText}`}>
            {totalNights} {totalNights > 1 ? 'Nights' : 'Night'}<br />
            {guest.adult} {guest.adult > 1 ? 'Adults' : 'Adult'} {guest.child} {guest.child > 1 ? 'Children' : 'Child'}
          </div>
          <div className="py-3">
            {roomsCount.map((room) => ((room.bf > 0 || room.nobf > 0) && (
              <div key={room.id}>
                <BookRoom room={room} totalNights={totalNights} />
              </div>
            )))}
          </div>
        </div>
        <div className={`${styles.headText} flex justify-between`}>
          <div>Total :</div>
          <div>THB {totalPayment.toLocaleString()}</div>
        </div>
    </div>
  )
}

export default BookingDetail