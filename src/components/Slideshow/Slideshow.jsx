import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.js';
import { headerDefault } from '../../constants/text.js';
import { bookingUrl } from '../../constants/pathUrl.js';
import { slideImages } from '../../images/index.js';

const delay = 8000;

const Slideshow = ({ displayText = true, headText = headerDefault.head, detailText = headerDefault.detail, buttonText = headerDefault.button, buttonUrl = bookingUrl }) => {
   const [index, setIndex] = useState(0);
   const timeoutRef = useRef(null);

   const resetTimeout = () => {
      if (timeoutRef.current) {
         clearTimeout(timeoutRef.current);
      }
   };

   useEffect(() => {
      resetTimeout();
      timeoutRef.current = setTimeout(() => setIndex((prevIndex) => (prevIndex === slideImages.length - 1 ? 0 : prevIndex + 1)), delay);
      return () => {
         resetTimeout();
      };
   }, [index]);

   return (
      <div className="bg-primary h-[800px] relative caret-transparent">
         <div className="m-auto overflow-hidden">
            <div className="whitespace-nowrap" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
               {slideImages.map((url, i) => (
                  <div className="inline-block h-[800px] w-full" key={i}>
                     <img src={url} alt="chandra hotel" className={`w-full h-[800px] object-cover ${i === index ? 'opacity-100' : 'opacity-0'} transition-all ease-out duration-1000`} />
                  </div>
               ))}
            </div>

            <div className="text-center">
               {slideImages.map((_, idx) => (
                  <div
                     key={idx}
                     className={`inline-block h-4 w-4 rounded-full cursor-pointer mt-4 mx-2 transition-all duration-500 ${index === idx ? 'bg-secondary' : 'bg-primary'}`}
                     onClick={() => {
                        setIndex(idx);
                     }}
                  ></div>
               ))}
            </div>
         </div>

         {displayText && (
            <div className="absolute ss:bottom-24 bottom-48 sm:left-24 left-10">
               <div className={`${styles.headText} font-bold md:text-8xl sm:text-7xl ss:text-6xl text-4xl`}>{headText}</div>
               <div className={`${styles.headText} ss:text-4xl text-xl mb-5 ml-2`}>{detailText}</div>
               <Link to={buttonUrl}>
                  <div className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:bg-white hover:text-secondary`}>{buttonText}</div>
               </Link>
            </div>
         )}
      </div>
   );
};

export default Slideshow;
