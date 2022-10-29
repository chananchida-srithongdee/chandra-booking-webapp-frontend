import React from 'react'
import styles from "./styles.js";

const Details = ({ imgSrc, imgAlt, headText, subHeadText, detail }) => {
  return (
    <div className="w-full">
        <div className="text-center text-5xl font-bold text-primary">{headText}</div>
        <div className={`${styles.flexCenter} lg:flex-row flex-col mb-28 mt-14 w-full`}>
            <div className="rounded-xl overflow-hidden">
                <img src={imgSrc} alt={imgAlt} className="object-cover w-[574px] sm:h-[450px] h-[230px]" />
            </div>
            <div className="lg:w-1/2 lg:pt-0 pt-4 lg:pl-14">
                <p className={`${styles.detail} text-3xl`}>{subHeadText}</p>
                <p className={`${styles.detail} text-lg whitespace-pre-line`}>{detail}</p>
            </div>
        </div>
    </div>
  )
}

export default Details