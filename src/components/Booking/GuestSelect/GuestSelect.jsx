import React, { useState, useEffect } from 'react'
import styles from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import GuestCountButton from './GuestCountButton.jsx';

const GuestSelect = ({  bookingData, setBookingData, adult, child, maxGuest }) => {

    const [showLimitGuest, setShowLimitGuest] = useState(false);
    const [showSelectGuest, setShowSelectGuest] = useState(false);

    const handleGuestShow = () => {
        if(showSelectGuest){
            setShowSelectGuest(false)
        }else{
            setShowSelectGuest(true)
        }
    }
    
  return (
    <div className="relative flex-initial ss:w-1/3 w-full ss:border-l-[1px] ss:border-t-0 border-t-[1px] border-black/20">
        <div className={`${styles.selectBtn} flex justify-between`} onClick={handleGuestShow} >
            <div>
                <div className={`${styles.headText}`}>Guest</div>
                <div className={`${styles.subText}`}>{bookingData.guest.adult} {bookingData.guest.adult > 1 ? 'Adults' : 'Adult'} {bookingData.guest.child} {bookingData.guest.child > 1 ? 'Children' : 'Child'} (6-12 years) </div>
            </div>
            <div className="items-center flex">
                {showSelectGuest ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
            </div>
        </div>
        {showSelectGuest && (
        <div className="flex flex-col absolute z-10 w-56 bg-white drop-shadow-md px-5 pt-3 pb-5 rounded-lg">
            <div className={`${styles.flexBetween} mb-4 border-b-[1px] pb-2`}>
                <div className="font-bold text-lg text-black">Select Guests</div>
            </div>
            <GuestCountButton bookingData={bookingData} setBookingData={setBookingData} changeData={adult} compareData={child} maxGuest={maxGuest} name="adult" title="Adults" setShowLimitGuest={setShowLimitGuest} />
            <GuestCountButton bookingData={bookingData} setBookingData={setBookingData} changeData={child} compareData={adult} maxGuest={maxGuest} name="child" title="Children" setShowLimitGuest={setShowLimitGuest} />
            {showLimitGuest && (maxGuest <= 0 ? (
                <div className={styles.warningText}>
                    Please select room first
                </div> 
            ):(
                <div className={styles.warningText}>
                    Too much guests for {bookingData.roomsCount.length > 1 ? 'rooms' : 'room'}
                </div> 
            ))}
        </div>
        )}
    </div>
  )
}

export default GuestSelect