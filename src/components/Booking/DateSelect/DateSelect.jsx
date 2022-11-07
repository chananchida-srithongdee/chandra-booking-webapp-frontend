import React, { useState, useEffect } from 'react'
import { DateRange } from 'react-date-range';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

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
        const checkIn = new Date(date[0].startDate)
        const checkOut = new Date(date[0].endDate)
        if(date[0].startDate.toDateString() === date[0].endDate.toDateString()){
            setBookingData({ ...bookingData, checkInDate: checkIn.toDateString(), checkOutDate: '' })
        }else{
            setBookingData({ ...bookingData, checkInDate: checkIn.toDateString(), checkOutDate: checkOut.toDateString() })
        }
    },[date])

    return (
        <div className="relative flex-initial ss:w-2/3 w-full">
            <div className={`${styles.selectBtn} ss:border-l-[1px] ss:border-t-0 border-t-[1px] border-black/20 flex w-full`} onClick={handleDateShow}>
                <div className="flex-1">
                    <div className={`${styles.headText}`}>Check-In</div>
                    <div className={styles.subText}>{bookingData.checkInDate}</div>
                </div>
                <div className="flex-1">
                    <div className={`${styles.headText}`}>Check-Out</div>
                    <div className={styles.subText}>{bookingData.checkOutDate ? bookingData.checkOutDate : 'Please select check out date'}</div>
                </div>
                <div className="items-center flex">
                    {showSelectDate ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
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
                    className='xs:text-[14px] text-[11px]'
                />
            </div>
            )}
        </div>
    )
}

export default DateSelect