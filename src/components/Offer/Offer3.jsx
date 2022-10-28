import React from 'react'
import { offer0_2,offer3_0, offer3_1,offer3_2} from './images'

import styles from './styles.js';
const Offer2 = () => {
    return (
        <div>
            <div className='flex flex-row space-x-60 m-40'>
                <div className='flex flex-col space-y-40'>
                    <div>
                        <div  className='my-200 text-[30px] font-bold'>
                        The Place to Call Your Own
                        </div>
                        <h3 >Suites & Private Villa Escape</h3>
                    </div>
                    <div>
                        <ul class="list-disc">
                            <li>Room rates from THB 19,900++/Night</li>
                            <li>Daily breakfast & dinner throughout stay*</li>
                            <li>Free stay for up to 2 children</li>
                        </ul>
                    </div>
                    <button type='button' className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:scale-110 `}>Booking Now</button>
                    
                </div>
                <div>
                    <img src={offer0_2} alt="offer0_2"className="md:rounded-lg" />
                </div>
            </div>
            <div >
                <div className='text-center	font-bold text-[36px]'>Offer Details</div>
                <hr className='border-3 border-[#D4990D] w-1/4 mx-auto my-10'/>
                <div className='mx-40'>
                    <p>
                        Enjoy an exclusive getaway in a spacious resort suites & private villa, and enjoy quality time together with the people that matter the most.
                    </p>
                    <br></br>
                    <p> 
                        Unwind in the space and comfort of a home away from home, and revel in the freedom to drift between indoor and outdoor spaces. Gather the family together for fun pool games, or enjoy an al fresco dinner in your personal tropical garden.
                    </p>
                    <br></br>
                    <p>
                        With the suites and private villa escape offer, travellers are invited to a spacious suites or luxuriate in a seamless villa experience with free breakfast and dinner throughout your stay in hotels and resorts.
                    </p>
                    <br></br>
                    <p>Enjoy peace of mind when staying with Chandra Hotels & Resorts as we continue to follow strict safety protocols and adhere to certified health and hygiene procedures with the comprehensive Chandra Complete Care programme..</p>
                    <br />
                    
                </div>
                <br />
                <div className='flex flex-row flex-wrap space-x-20  m-40  space-evenly justify-center' >
                    <div className={`${styles.off1_box}`}>
                        <img src={offer3_0} alt="off3_0" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer3_1} alt="off3_1" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer3_2} alt="off3_2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer2