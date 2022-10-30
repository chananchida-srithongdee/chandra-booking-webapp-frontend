import React from 'react'

import Thumbnail from '../../Thumbnail/Thumbnail.jsx';

const Section = ({ title, items, imgW, imgH, url }) => {
  return (
    <div className="pt-28 pb-32 w-full caret-transparent">
        <div className="ss:w-[600px] w-2/3 mx-auto text-center font-bold text-primary ss:text-5xl text-4xl border-b-4 pb-4 border-secondary">{title}</div>

        <div className="flex flex-wrap pt-10 justify-center items-center">
            {items.map((item, index) => ( index < 4 && (
                <div key={item._id} className="mx-2">
                    <Thumbnail imgW={imgW} imgH={imgH} imgSrc={item.mainImg} imgAlt="chandra service" head={item.title} detail={item.detail} linkTo={`${url}/details/${items._id}`} />
                </div>
            )))}
        </div>
    </div>
  )
}

export default Section