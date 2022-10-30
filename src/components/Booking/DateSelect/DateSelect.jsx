import React, { useState, useEffect } from 'react'
import { DateRange } from 'react-date-range';

import styles from './styles';

const DateSelect = ({ bookingData, setBookingData }) => {
    const today = new Date();
    const tomorrow = new Date();
    const maxDate = new Date();
    tomorrow.setDate(today.getDate() + 1);
    maxDate.setDate(today.getDate() + (365*5));

    const [date, setDate] = useState([{ startDate: today, endDate: tomorrow, key: 'selection' }]);
    const [showSelectDate, setShowSelectDate] = useState(false);

    const handleDateShow = () => {
        if(showSelectDate){
            setShowSelectDate(false)
        }else{
            setShowSelectDate(true)
        }
    }
    
    useEffect(() => {
        console.log(date);
        setBookingData({ ...bookingData, checkInDate: new Date(date[0].startDate) })
        setBookingData({ ...bookingData, checkOutDate: new Date(date[0].endDate) })
    },[date])

    return (
        <div className="relative flex-initial w-2/3">
            <div className={`${styles.selectBtn} border-l-[1px] border-black/20 flex w-full`} onClick={handleDateShow}>
                <div className="flex-1">
                    <div className={`${styles.headText}`}>Check In</div>
                    <div className={styles.subText}>{bookingData.checkInDate.toDateString()}</div>
                </div>
                <div className="flex-1">
                    <div className={`${styles.headText}`}>Check Out</div>
                    <div className={styles.subText}>{bookingData.checkOutDate.toDateString()}</div>
                </div>
            </div>
            {showSelectDate && (
            <div className="absolute">
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={today}
                    maxDate={maxDate}
                    rangeColors = {['#D4990D','#D4990D','#D4990D']}
                    style={{ fontSize: '15px' }}
                />
            </div>
            )}
        </div>
    )
}

export default DateSelect