import React from 'react'
import styles from './styles';

const CountButton = ({  bookingData, setBookingData, reData, data, maxGuest, name, title, setShowLimitGuest }) => {

    const increase = (renum, num, lim) => (renum + num >= lim ? renum : renum + 1 ) 
    const decrease = (renum, lim) => (renum <= lim ? lim : renum - 1 ) 

    const handleIncrease = (e, dataRe, data, dataMax) => {
        const num = increase(dataRe, data, dataMax);
        if(num === dataRe){
            setShowLimitGuest(true)
        }
        setBookingData({ ...bookingData, guest : { ...bookingData.guest, [e.target.getAttribute('name')]: num }})
    };

    const handleDecrease = (e, dataRe) => {
        setBookingData({ ...bookingData, guest : { ...bookingData.guest, [e.target.getAttribute('name')]: decrease(dataRe, 0) }})
    };

    return (
        <div className={`${styles.flexBetween} mb-4`}>
            <div className={`${styles.selectGuestText}`}>{title}</div>
            <div className="flex border-[1px] border-secondary">
                <div className={`${styles.button}`} name={name} onClick={(event) => handleDecrease(event, reData)}>-</div>
                <div className="w-[40px] h-[35px] bg-gray-300 flex justify-center items-center text-lg">{reData}</div>
                <div className={`${styles.button}`} name={name} onClick={(event) => handleIncrease(event, reData, data, maxGuest)}>+</div>
            </div>
        </div>
    )
}

export default CountButton