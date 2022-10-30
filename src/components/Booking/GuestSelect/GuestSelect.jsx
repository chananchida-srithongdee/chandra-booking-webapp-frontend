import React, { useState, useEffect } from 'react'
import styles from './styles';

import CountButton from './CountButton.jsx';

const GuestSelect = ({  bookingData, setBookingData, adult, child, maxGuest }) => {

    const [showLimitGuest, setShowLimitGuest] = useState(false);
    const [showSelectGuest, setShowSelectGuest] = useState(false);

    const handleGuestShow = () => {
        if(showSelectGuest){
            setShowSelectGuest(false)
        }else{
            setShowSelectGuest(true)
        }
        setShowLimitGuest(false)
    }
    
    useEffect(() => {
        if((bookingData.guest.adult + bookingData.guest.child < maxGuest)){
            setShowLimitGuest(false)
        }
    },[bookingData]);

  return (
    <div className="relative flex-initial w-1/3">
        <div className={`${styles.selectBtn}`} onClick={handleGuestShow} >
            <div className={`${styles.headText}`}>Guest</div>
            <div className={`${styles.subText}`}>{bookingData.guest.adult} {bookingData.guest.adult > 1 ? 'Adults' : 'Adult'} {bookingData.guest.child} {bookingData.guest.child > 1 ? 'Children' : 'Child'}</div>
        </div>
        {showSelectGuest && (
        <div className="flex flex-col absolute z-10 w-56 bg-white drop-shadow-md px-5 pt-3 pb-5 rounded-lg">
            <div className={`${styles.flexBetween} mb-4 border-b-[1px] pb-2`}>
                <div className="font-bold text-lg text-black">Select Guests</div>
                <div className="text-sm text-black/50 cursor-pointer rounded-full transition-all" onClick={handleGuestShow}>✖</div>
            </div>
            <CountButton bookingData={bookingData} setBookingData={setBookingData} reData={adult} data={child} maxGuest={maxGuest} name="adult" title="Adults" setShowLimitGuest={setShowLimitGuest} />
            <CountButton bookingData={bookingData} setBookingData={setBookingData} reData={child} data={adult} maxGuest={maxGuest} name="child" title="Children" setShowLimitGuest={setShowLimitGuest} />
            {showLimitGuest && (
                <div className="text-red-600 text-sm flex justify-end">
                    Too much guests for {bookingData.roomsCount.length > 1 ? 'rooms' : 'room'}
                </div>
            )}
        </div>
        )}
    </div>
  )
}

export default GuestSelect