import React, { useState, useEffect } from 'react'
import { DateRange } from 'react-date-range';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import styles from './styles';
import { addDays, addMonths } from 'date-fns/esm';

const DateSelect = ({ bookingData, setBookingData }) => {
    const maxDate = addMonths(new Date(), 3);

    const [date, setDate] = useState([{ startDate: new Date(), endDate: addDays(new Date(), 1), key: 'selection' }]);
    const [showSelectDate, setShowSelectDate] = useState(false);
    const [disabledDate, setDisabledDate] = useState([]);

    const handleDateShow = () => {
        if(showSelectDate){
            setShowSelectDate(false)
        }else{
            setShowSelectDate(true)
        }
    }

    useEffect(() => {
        // getRoomFullDate
        // setDisabledDate([addDays(new Date(), 2), addDays(new Date(), 3), addDays(new Date(), 10), addDays(new Date(), 11)])

    }, [])

    useEffect(() => {
        const checkIn = new Date(date[0].startDate)
        const checkOut = new Date(date[0].endDate)
        if(date[0].startDate.toDateString() === date[0].endDate.toDateString()){
            setBookingData({ ...bookingData, checkIn_date: checkIn.toDateString(), checkOut_date: '' })
        }else{
            setBookingData({ ...bookingData, checkIn_date: checkIn.toDateString(), checkOut_date: checkOut.toDateString() })
        }

    },[date])

    return (
        <div className="relative flex-initial ss:w-2/3 w-full">
            <div className={`${styles.selectBtn} flex w-full`} onClick={handleDateShow}>
                <div className="flex-1">
                    <div className={`${styles.headText}`}>Check-In</div>
                    <div className={styles.subText}>{bookingData.checkIn_date}</div>
                </div>
                <div className="flex-1">
                    <div className={`${styles.headText}`}>Check-Out</div>
                    <div className={styles.subText}>{bookingData.checkOut_date ? bookingData.checkOut_date : 'Please select check out date'}</div>
                </div>
                <div className="items-center flex">
                    {showSelectDate ? <ArrowDropUpIcon fontSize='large' /> : <ArrowDropDownIcon fontSize='large' />}
                </div>
            </div>
            {showSelectDate && (
            <div className="absolute shadow-xl z-10">
                <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    minDate={new Date()}
                    disabledDates={disabledDate}
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