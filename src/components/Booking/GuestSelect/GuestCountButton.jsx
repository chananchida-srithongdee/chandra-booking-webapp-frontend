import React from 'react'
import styles from './styles';

const GuestCountButton = ({  bookingData, setBookingData, changeData, compareData, maxGuest, name, title, setShowLimitGuest }) => {

    const timeout = 2000;
    const handleShowLimitGuest = () => {
        setShowLimitGuest(true)
        setTimeout(() => (setShowLimitGuest(false)),timeout)
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

    return (
        <div className={`${styles.flexBetween} mb-4`}>
            <div className={`${styles.selectGuestText}`}>{title}</div>
            <div className="flex border-[1px] border-secondary">
                <div className={`${styles.button}`} name={name} onClick={(event) => handleDecrease(event, changeData)}>-</div>
                <div className="w-[40px] h-[35px] bg-gray-300 flex justify-center items-center text-lg">{changeData}</div>
                <div className={`${styles.button}`} name={name} onClick={(event) => handleIncrease(event, changeData, compareData, maxGuest)}>+</div>
            </div>
        </div>
    )
}

export default GuestCountButton