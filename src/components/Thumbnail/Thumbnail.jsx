import React from 'react'

const Thumbnail = ({ imgW, imgH, imgSrc, imgAlt, head, detail }) => {
  return (
    <div className="flex flex-col justify-center items-center">
        <img src={imgSrc} alt={imgAlt} className={`w-[${imgW}] h-[${imgH}] object-cover`} />
        <div className="text-lg text-primary font-bold">{head}</div>
        <div className='text-sm text-[#9A9A9A]'>{detail}</div>
    </div>
  )
}

export default Thumbnail