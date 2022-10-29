import React from 'react';

const Thumbnail = ({ imgW, imgH, imgSrc, imgAlt, head, detail }) => {
  return (
    <div className="flex flex-col justify-center items-center px-5 py-5 rounded-xl">
      <div className="rounded-xl overflow-hidden">
        <img src={imgSrc} alt={imgAlt} style={{ width: imgW }} className={`h-[${imgH}] object-cover`} />
      </div>
      <div className="text-lg text-primary font-bold mt-4">{head}</div>
      <div className="text-sm text-[#9A9A9A] mt-2" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', width: imgW }}>{detail}</div>
    </div>
  )
}

export default Thumbnail