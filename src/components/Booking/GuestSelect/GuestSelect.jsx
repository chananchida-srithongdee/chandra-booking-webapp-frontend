import React, { useState } from 'react'
import styles from './styles';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

const timeout = 2000;

const GuestSelect = ({  bookingData, setBookingData }) => {
    const { guest: {adult, child} } = bookingData;
    const [showLimitGuest, setShowLimitGuest] = useState(false);
    const [showSelectGuest, setShowSelectGuest] = useState(false);
    
    const handleShowLimitGuest = () => {
        setShowLimitGuest(true)
        setTimeout(() => (setShowLimitGuest(false)), timeout)
    };

    const increase = (renum, num, lim) => (renum + num >= lim ? renum : renum + 1 ) 
    const decrease = (renum, lim) => (renum <= lim ? lim : renum - 1 ) 

    const handleIncrease = (e, dataRe, data, dataMax) => {
        const num = increase(dataRe, data, dataMax);
        if(num === dataRe){
            handleShowLimitGuest();
        }
        setBookingData({ ...bookingData, guest : { ...bookingData.guest, [e.target.getAttribute('name')]: num }})
    };

    const handleDecrease = (e, dataRe) => {
        setShowLimitGuest(false)
        setBookingData({ ...bookingData, guest : { ...bookingData.guest, [e.target.getAttribute('name')]: decrease(dataRe, 0) }})
    };

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
            <div className={`${styles.flexBetween} mb-4`}>
                <div className={`${styles.selectGuestText}`}>Adult</div>
                <div className="flex border-[1px] border-secondary">
                    <div className={`${styles.button}`} name="adult" onClick={(event) => handleDecrease(event, adult)}>-</div>
                    <div className="w-[40px] h-[35px] bg-gray-300 flex justify-center items-center text-lg">{adult}</div>
                    <div className={`${styles.button}`} name="adult" onClick={(event) => handleIncrease(event, adult, child, 4)}>+</div>
                </div>
            </div>
            <div className={`${styles.flexBetween} mb-4`}>
                <div className={`${styles.selectGuestText}`}>Child</div>
                <div className="flex border-[1px] border-secondary">
                    <div className={`${styles.button}`} name="child" onClick={(event) => handleDecrease(event, child)}>-</div>
                    <div className="w-[40px] h-[35px] bg-gray-300 flex justify-center items-center text-lg">{child}</div>
                    <div className={`${styles.button}`} name="child" onClick={(event) => handleIncrease(event, child, adult, 4)}>+</div>
                </div>
            </div>
            {showLimitGuest &&  
                <div className={styles.warningText}>
                    Too much guests
                </div>
            }
        </div>
        )}
    </div>
  )
}

export default GuestSelect