import React from 'react'
import { offer1, offer1_0, offer1_1,offer1_2} from '../../images'

import styles from '../Offer/styles.js';
const Offer1 = () => {
    return (
        <div>
            <div className='flex flex-row space-x-60 m-40'>
                <div className='flex flex-col space-y-40'>
                    <div>
                        <div  className='my-200 text-[42px] font-bold'>
                        The Place to Revitalise
                        </div>
                        <h3 >Relax and Unwind at Chandra</h3>
                    </div>
                    <div>
                        <ul class="list-disc">
                            <li>Fresh daily breakfast</li>
                            <li>60-min massage for two</li>
                            <li>Healthy sleep kit</li>
                            <li>In-room workout</li>
                        </ul>
                    </div>
                    <button type='button' className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:scale-110 `}>Booking Now</button>
                    
                </div>
                <div>
                    <img src={offer1} alt="offer0_0"className="md:rounded-lg" />
                </div>
            </div>
            <div >
                <div className='text-center	font-bold text-[36px]'>Offer Details</div>
                <hr className='border-3 border-[#D4990D] w-1/4 mx-auto my-10'/>
                <div className='mx-40'>
                    <p>
                        Restore your inner glow and return to a state of balance with a spacation at Chandra, The place to revitalise body, mind, and soul.
                    </p>
                    <br></br>
                    <p> 
                        The wellness offer includes a 60-minute AcuRelax treatment to relax and rejuvenate. Guests can also re-energise with an in-room Fitness Workout Kit and keep up their health regime in the privacy of the room. At the end of the day, a restful night’s sleep is enhanced with a choice of pillows, calming lavender & bergamot pillow sprays and luxurious satin eye masks.
                    </p>
                    <br></br>
                    <ul class = 'list-disc'>
                        <li>
                            Special room rates from THB  2,990/night
                        </li>
                        <li>
                            Fresh daily breakfast for 2 persons
                        </li>
                        <li>
                            60-min AcuRelax for 2 persons (acupressure, foot, and scalp massage)
                        </li>
                        <li>
                            Satin eye mask for 2 persons
                        </li>
                        <li>
                            Lavender & bergamot pillow spray for 2 persons
                        </li>
                        <li>
                            Choice of pillows
                        </li>
                        <li>
                            In-room Fitness Workout
                        </li>
                    </ul>
                    <br />
                    <p>Enjoy peace of mind when staying with Chandra Hotels & Resorts as we continue to follow strict safety protocols and adhere to certified health and hygiene procedures with the comprehensive Chandra Complete Care programme.</p>
                </div>
                <br />
                <div className='flex flex-row flex-wrap space-x-20  m-40  space-evenly justify-center' >
                    <div className={`${styles.off1_box}`}>
                        <img src={offer1_0} alt="off1_0" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer1_1} alt="off1_1" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer1_2} alt="off1_2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer1