import React, { useState } from 'react';

import styles from '../styles.js';

const PreviewImage = ({ imgs }) => {

  const [index, setIndex] = useState(0);
  
  const handleChange = (e) => {
    const i = parseInt(e.target.getAttribute('name'))
    setIndex(i)
  }
  
  return (
    <div className='w-full flex md:flex-row flex-col'>
      {imgs.map((img, imgIndex) => (
        imgIndex === index && (<img key={imgIndex} src={img} alt="chandra room" className="fade md:w-4/5 w-full mr-6 lg:h-[640px] md:h-[550px] sm:h-[480px] ss:h-[380px] xs:h-[290px] h-[200px] object-cover rounded-xl mb-5" />)
      ))}
      <div className='md:w-1/5 w-full relative lg:h-[640px] md:h-[550px] rounded-xl border-black/20 flex md:flex-col flex-row md:overflow-y-scroll md:overflow-x-hidden overflow-x-scroll'>
        {imgs.map((img, imgIndex) => (index === imgIndex ? (
          <img key={imgIndex} name={imgIndex} src={img} alt="chandra room" onClick={handleChange} className={`${styles.img} brightness-50 border-2 p-1`} />
          ):(
          <img key={imgIndex} name={imgIndex} src={img} alt="chandra room" onClick={handleChange} className={`${styles.img} hover:brightness-50`} />
        )))}
      </div>
    </div>
  )
}

export default PreviewImage