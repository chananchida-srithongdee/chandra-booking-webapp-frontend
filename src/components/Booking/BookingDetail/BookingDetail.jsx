import React from 'react';
import styles from './styles.js';

const BookingDetail = ({ bookingData, totalNights }) => {
  const { guest, checkIn_date, checkOut_date, roomType, breakfast } = bookingData;
  
  return (
    <div className="w-96 bg-primary flex flex-col justify-center px-8 py-6 rounded-xl h-fit">
        <div className="font-bold text-secondary text-2xl text-shadow-xl mb-3">Your Stay</div>
        <div className="flex justify-between mb-3">
          <div>
            <div className={styles.headText}>Check-In</div>
            <div className={styles.subText}>{checkIn_date}</div>
            <div className={styles.subsubText}>After 2:00 PM</div>
          </div>
          <div>
            <div className={styles.headText}>Check-Out</div>
            <div className={styles.subText}>{checkOut_date ? checkOut_date : 'No check out date'}</div>
            <div className={styles.subsubText}>Before 12:00 PM</div>
          </div>
        </div>
        <div className="py-10 border-y-[1px] border-white/50 mb-3">
          <div className={`${styles.subText}`}>
            {totalNights} {totalNights > 1 ? 'Nights' : 'Night'}<br />
            {guest.adult} {guest.adult > 1 ? 'Adults' : 'Adult'} {guest.child} {guest.child > 1 ? 'Children' : 'Child'} (6-12 years)<br />
          </div>
          {roomType.title && 
          <div className="py-3">
            <div className={`${styles.roomText} flex justify-between`}>
              <div>{roomType.title}</div>
              <div>THB {roomType.price.toLocaleString()}</div>
            </div>
            <div className='flex justify-between'>
              <div className="xs:ml-3">
              {breakfast && (
                <div className={`${styles.subroomText}`}>
                  1 Room (Breakfast)
                </div>
              )}
              {!breakfast > 0 && (
                <div className={`${styles.subroomText}`}>
                  1 Room (no Breakfast)
                </div>
              )}
              </div>
              <div className='text-white text-xs text-right'>Per Night</div>
            </div>
          </div>
          }
        </div>
        <div className={`${styles.headText} flex justify-between`}>
          <div>Total :</div>
          <div>THB {(roomType.price*totalNights).toLocaleString()}</div>
        </div>
        <ul className='mt-2 ml-5 text-sm text-white list-disc'>
            <li className='text-red-500 text-shadow-md'>*Need at least one adult</li>
            <li>Under 6 years stay for free</li>
            <li>You will receive breakfast coupon(s) based on maximum guests per room (with breakfast)</li>
            <li>You can buy additional breakfast coupons at hotel</li>
            <li>You can ask for an extra bed at hotel</li>
        </ul>
    </div>
  )
}

export default BookingDetail