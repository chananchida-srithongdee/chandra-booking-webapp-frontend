import React from 'react'
import styles from './styles.js';

const BookRoom = ({ data }) => {

    const { title, bf, nobf, min, max } = data;

  return (
    <div className="py-2">
        <div className={`${styles.roomText} flex justify-between`}>
        <div>{title}</div>
        <div>THB {(bf*max) + (nobf*min)}</div>
        </div>
        <div className="ml-3">
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
    </div>
  )
}

export default BookRoom