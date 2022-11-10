import React from 'react';

import muiStyles from './muiStyles.js';
import { Link } from 'react-router-dom';
import { ButtonBase } from '@mui/material';

const Thumbnail = ({ imgW, imgH, imgSrc, imgAlt, head, detail, url }) => {
   return (
      <Link to={url}>
         <ButtonBase style={muiStyles.cardAction} className="hover:bg-gray-300/60">
            <div className="flex flex-col justify-center items-center px-8 py-5 rounded-xl">
               <div className="rounded-xl overflow-hidden">
                  <img src={imgSrc} alt={imgAlt} style={{ width: imgW, height: imgH }} className="object-cover" />
               </div>
               <div className="text-lg text-primary font-bold mt-4">{head}</div>
               <div className="text-sm text-[#9A9A9A] mt-2" style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', width: imgW }}>
                  {detail}
               </div>
            </div>
         </ButtonBase>
      </Link>
   );
};

export default Thumbnail;
