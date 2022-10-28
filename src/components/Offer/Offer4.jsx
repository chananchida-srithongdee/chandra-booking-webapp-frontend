import React from 'react'
import { offer0_3,offer4_0, offer4_1,offer4_2} from './images'

import styles from './styles.js';
const Offer4 = () => {
    return (
        <div>
            <div className='flex flex-row space-x-60 m-40'>
                <div className='flex flex-col space-y-40'>
                    <div>
                        <div  className='my-200 text-[42px] font-bold'>
                            Chandra Unlimited
                        </div>
                        <h3 >Enables guests to experience everything</h3>
                    </div>
                    <div>
                        <ul class="list-disc">
                            <li>Experience everything that Chandra has to offer at THB 4,590 per person, per day. </li>
                            <li>Unlimited dining and drinks across our dining destinations, unlimited experiences, limitless massages, spa therapies and so much more.</li>
                        </ul>
                    </div>
                    <button type='button' className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:scale-110 `}>Booking Now</button>
                    
                </div>
                <div>
                    <img src={offer0_3} alt="offer0_3"className="md:rounded-lg" />
                </div>
            </div>
            <div >
                <div className='text-center	font-bold text-[36px]'>Offer Details</div>
                <hr className='border-3 border-[#D4990D] w-1/4 mx-auto my-10'/>
                <div className='mx-40'>
                    <br />
                    <ul class = 'list-disc'>
                        <li>
                            Unlimited dining at our bars, restaurants and In-Villa Dining
                        </li>
                        <li>
                            Unlimited access to visiting Michelin-starred chef dinners and onsite experiences
                        </li>
                        <li>
                            Unlimited non-alcoholic and alcoholic beverages at our bars and restaurants
                        </li>
                        <li>
                            Unlimited wines from the chandra Unlimited wine list
                        </li>
                        <li>
                            Unlimited experiences from our Experiences Menu, including diving
                        </li>
                        <li>
                            Unlimited spa treatments and massages at the chandra Spa, including visiting wellness practitioners
                        </li>
                        <li>
                            Access to our children’s club, the Den and all experiences for children
                        </li>
                        <li>
                            Daily replenishment of your in-villa minibar
                        </li>
                        <li>
                            Daily laundry service
                        </li>
                    </ul>
                </div>
                <br />
                <div className='flex flex-row flex-wrap space-x-20  m-40  space-evenly justify-center' >
                    <div className={`${styles.off1_box}`}>
                        <img src={offer4_0} alt="off4_0" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer4_1} alt="off4_1" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer4_2} alt="off4_2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer4