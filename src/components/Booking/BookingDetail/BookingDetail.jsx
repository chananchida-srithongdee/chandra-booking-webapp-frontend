import React from 'react';
import styles from './styles.js';

import BookRoom from './BookRoom.jsx';

const BookingDetail = ({ bookingData, rooms }) => {
  const { guest, checkInDate, checkOutDate } = bookingData;
  const totalNights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));

  const calTotalPayment = () => {
    let sum = 0;
    for (let i = 0; i < rooms.length; i++) {
      sum += ((rooms[i].bf*rooms[i].max)+(rooms[i].nobf*rooms[i].min))
    }
    return sum;
  }

  return (
    <div className="w-96 bg-primary flex flex-col justify-center px-8 py-6 rounded-xl">
        <div className="font-bold text-secondary text-2xl text-shadow-xl mb-3">Your Stay</div>
        <div className="flex justify-between mb-3">
          <div>
            <div className={styles.headText}>Check In</div>
            <div className={styles.subText}>{checkInDate.toDateString()}</div>
            <div className={styles.subsubText}>After 2:00 PM</div>
          </div>
          <div>
            <div className={styles.headText}>Check Out</div>
            <div className={styles.subText}>{checkOutDate.toDateString()}</div>
            <div className={styles.subsubText}>Before 12:00 PM</div>
          </div>
        </div>
        <div className="py-10 border-y-[1px] border-white/50 mb-3">
          <div className={`${styles.subText}`}>
            {totalNights} {totalNights > 1 ? 'Nights' : 'Night'}<br />
            {guest.adult} {guest.adult > 1 ? 'Adults' : 'Adult'} {guest.child} {guest.child > 1 ? 'Children' : 'Child'}
          </div>
          <div className="py-3">
            {rooms.map((data) => ((data.bf > 0 || data.nobf > 0) && (
              <div key={data.id}>
                <BookRoom data={data} />
              </div>
            )))}
          </div>
        </div>
        <div className={`${styles.headText} flex justify-between`}>
          <div>Total :</div>
          <div>THB {calTotalPayment().toLocaleString()}</div>
        </div>
    </div>
  )
}

export default BookingDetail