import React from 'react'
import styles from './styles';

import { bgHome } from '../../images'

const Home = () => {
  return (
    <div className="w-full">
      <div className="bg-primary h-[800px] relative">
        <img src={bgHome} alt="chandra resort" className="w-full h-[800px] object-cover" />
        <div className="absolute ss:bottom-[100px] bottom-[190px] left-[90px]">
          <div className={`${styles.headText} font-bold md:text-[96px] sm:text-[80px] ss:text-[70px] text-[40px]`}>THE CHANDRA</div>
          <div className={`${styles.headText} ss:text-[36px] text-[20px] mb-5 ml-2`}>Experience the difference.</div>
          <div className={`${styles.button} text-[25px] ml-2 text-white w-fit bg-secondary text-shadow-xl hover:bg-white hover:text-secondary`}>Booking Now</div>
        </div>
      </div>
    </div>
  )
}

export default Home