import React from 'react'
import styles from './styles';

import { sup0 } from './images'

const Superior = () => {
  return (
    <div className="w-full">
      <div className="bg-primary h-[800px] relative">
        <img src={sup0} alt="chandra resort" className="w-full h-[800px] object-cover" />
        <div className="absolute ss:bottom-24 bottom-48 sm:left-24 left-10">
          <div className={`${styles.headText} font-bold md:text-8xl sm:text-7xl ss:text-6xl text-4xl`}>THE CHANDRA</div>
          <div className={`${styles.headText} ss:text-4xl text-xl mb-5 ml-2`}>Experience the difference.</div>
          <div className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:bg-white hover:text-secondary`}>Booking Now</div>
        </div>
        <div className="h-[600px]"></div>
      </div>
    </div>
  )
}

export default Superior