import React, { useEffect } from 'react'
import { offer1, offer2, offer3, offer4 } from '../../images'

import Thumbnail from '../Thumbnail/Thumbnail.jsx';
import styles from './styles.js';

const Offer = ({ setNavbarBg }) => {

    useEffect(() => {
        setNavbarBg('bg-primary')
    }, []);

    return (
        <div>Hello</div>
        // <div className="ss:pt-52 pt-40">
        //     <div className="ss:w-[480px] w-2/3 mx-auto text-center font-bold text-primary ss:text-5xl text-4xl border-b-4 pb-4 border-secondary">Featured Offers</div>
        //     <p className="text-center text-lg text-primary mt-10 mb-12">Discover a world of possibilities at Chandra. Featuring a wide variety of hotels and resorts in top destinations, we give you the best offers guaranteed.</p>

        //     <div className="flex flex-row flex-wrap space-evenly space-x-10 justify-center  ">
        //         <Thumbnail imgW="270px" imgH="340px" imgSrc={offer1} imgAlt="chandra garden" head detail/>                
        //         <div className="flex flex-col ">
        //             <img src={offer0_0} alt="offer0_0" className={`${styles.photos} `} />
        //             <br />
        //             <h3 >The place to Revitalise</h3>
        //             <h4 className='text-[12px] text-[#9A9A9A]'>Restore your inner glow and return to state of balance ...</h4>
        //         </div>
        //         <div className="flex flex-col">
        //             <img src={offer0_1}  alt="offer0_1" className={`${styles.photos} `} />
        //             <br />
        //             <h3 >  Linger for Longer</h3>
        //             <h4 className='text-[12px] text-[#9A9A9A]'>With borders open and restrictions lifted, it’s time ...</h4>
        //         </div>
        //         <div className="flex flex-col">
        //             <img src={offer0_2}  alt="offer0_2" className={`${styles.photos} object-bottom `} />
        //             <br />
        //             <h3 >  The Place to Call Your Own</h3>
        //             <h4 className='text-[12px] text-[#9A9A9A]'>Enjoy an exclusive getaway </h4>
        //             <h4 className='text-[12px] text-[#9A9A9A]'>in a spacious resort suites & private villa ...</h4>
        //         </div>
        //         <div className="flex flex-col ">
        //             <img src={offer0_3}  alt="offer0_3" className={`${styles.photos}`} />
        //             <br />
        //             <h3 >  Chandra Unlimited</h3>
        //             <h4 className='text-[12px] text-[#9A9A9A]'>chandra Unlimited enables guests </h4>
        //             <h4 className='text-[12px] text-[#9A9A9A]'>to experience everything there ...</h4>
        //         </div>
        //     </div>
        //     <div className='my-20'></div>
        // </div>
    )
}

export default Offer