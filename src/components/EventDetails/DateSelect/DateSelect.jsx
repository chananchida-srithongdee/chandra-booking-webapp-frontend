import React, { useState, useEffect } from 'react';
import { DateRange } from 'react-date-range';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

import styles from './styles';
import { addDays, addMonths } from 'date-fns/esm';

const DateSelect = ({ eventData, setEventData }) => {
   const maxDate = addMonths(new Date(), 3);

   const [date, setDate] = useState([{ startDate: new Date(), endDate: addDays(new Date(), 1), key: 'selection' }]);
   const [showSelectDate, setShowSelectDate] = useState(false);

   const handleDateShow = () => {
      if (showSelectDate) {
         setShowSelectDate(false);
      } else {
         setShowSelectDate(true);
      }
   };

   useEffect(() => {
      const checkIn = new Date(date[0].startDate);
      const checkOut = new Date(date[0].endDate);
      if (date[0].startDate.toDateString() === date[0].endDate.toDateString()) {
         setEventData({ ...eventData, start: checkIn.toDateString(), end: '' });
      } else {
         setEventData({ ...eventData, start: checkIn.toDateString(), end: checkOut.toDateString() });
      }
   }, [date]);

   return (
      <div className="relative flex-initial sm:w-[700px] w-5/6 border rounded-md border-black/20 mb-10">
         <div className={`${styles.selectBtn} flex w-full`} onClick={handleDateShow}>
            <div className="flex-1">
               <div className={`${styles.headText}`}>Event Start</div>
               <div className={styles.subText}>{eventData.start}</div>
            </div>
            <div className="flex-1">
               <div className={`${styles.headText}`}>Event End</div>
               <div className={styles.subText}>{eventData.end ? eventData.end : 'Please select check out date'}</div>
            </div>
            <div className="items-center flex">{showSelectDate ? <ArrowDropUpIcon fontSize="large" /> : <ArrowDropDownIcon fontSize="large" />}</div>
         </div>
         {showSelectDate && (
            <div className="absolute shadow-xl z-10">
               <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  minDate={new Date()}
                  maxDate={maxDate}
                  rangeColors={['#D4990D', '#D4990D', '#D4990D']}
                  className="xs:text-[14px] text-[11px]"
               />
            </div>
         )}
      </div>
   );
};

export default DateSelect;
