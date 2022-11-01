import React from 'react'
import styles from './styles.js';

const BookRoom = ({ room, totalNights }) => {

    const { title, bf, nobf, min, max } = room;

  return (
    <div className="py-2">
        <div className={`${styles.roomText} flex justify-between`}>
          <div>{title}</div>
          <div>THB {(((bf*max) + (nobf*min))*totalNights).toLocaleString()}</div>
        </div>
        <div className='flex justify-between'>
          <div className="xs:ml-3">
          {bf > 0 && (
            <div className={`${styles.subroomText}`}>
              {bf} {bf > 1 ? 'Rooms' : 'Room'} (Breakfast)
            </div>
          )}
          {nobf > 0 && (
            <div className={`${styles.subroomText}`}>
              {nobf} {nobf > 1 ? 'Rooms' : 'Room'} (no Breakfast)
            </div>
          )}
          </div>
          <div className='text-white text-xs text-right'>THB {((bf*max) + (nobf*min)).toLocaleString()} Per Night</div>
        </div>
    </div>
  )
}

export default BookRoom