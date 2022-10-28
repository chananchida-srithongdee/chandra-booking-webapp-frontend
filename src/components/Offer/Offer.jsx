import React, { useEffect } from 'react'
import { offer0_0,offer0_1, offer0_2,offer0_3} from './images'

import styles from './styles.js';

const Offer = ({ setNavbarBg }) => {

    useEffect(() => {
        setNavbarBg('bg-primary')
    }, []);

    return (
        <div >
            <div className="h-[200px]"></div>{/* เว้นพื้นที่ลงมาจากด้านบนสุดPage*/}

            <div  className={`${styles.subHeading}flex flex-col container mx-auto px-40 my-200`}>
                <div className={`${styles.flexCenter}`}>Featured Offers</div>
                <hr className=''></hr>
            </div>

            <h3 className="text-center text-lg color-[484848] container mx-auto my-10 "> Discover a world of possibilities at Chandra. Featuring a wide variety of hotels and resorts in top destinations, we give you the best offers guaranteed.</h3>

            <div className="flex flex-row flex-wrap space-evenly space-x-10 justify-center  ">
                <div className="flex flex-col ">
                    <img src={offer0_0} alt="offer0_0" className={`${styles.photos} `} />
                    <br />
                    <h3 >The place to Revitalise</h3>
                    <h4 className='text-[12px] text-[#9A9A9A]'>Restore your inner glow and return to state of balance ...</h4>
                </div>
                <div className="flex flex-col">
                    <img src={offer0_1}  alt="offer0_1" className={`${styles.photos} `} />
                    <br />
                    <h3 >  Linger for Longer</h3>
                    <h4 className='text-[12px] text-[#9A9A9A]'>With borders open and restrictions lifted, it’s time ...</h4>
                </div>
                <div className="flex flex-col">
                    <img src={offer0_2}  alt="offer0_2" className={`${styles.photos} object-bottom `} />
                    <br />
                    <h3 >  The Place to Call Your Own</h3>
                    <h4 className='text-[12px] text-[#9A9A9A]'>Enjoy an exclusive getaway </h4>
                    <h4 className='text-[12px] text-[#9A9A9A]'>in a spacious resort suites & private villa ...</h4>
                </div>
                <div className="flex flex-col ">
                    <img src={offer0_3}  alt="offer0_3" className={`${styles.photos}`} />
                    <br />
                    <h3 >  Chandra Unlimited</h3>
                    <h4 className='text-[12px] text-[#9A9A9A]'>chandra Unlimited enables guests </h4>
                    <h4 className='text-[12px] text-[#9A9A9A]'>to experience everything there ...</h4>
                </div>
            </div>
            <div className='my-20'></div>
        </div>
    )
}

export default Offer