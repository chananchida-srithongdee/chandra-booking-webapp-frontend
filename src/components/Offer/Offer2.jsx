import React from 'react'
import { offer0_1,offer2_0, offer2_1,offer2_2} from '../../images'

import styles from './styles.js';
const Offer2 = () => {
    return (
        <div>
            <div className='flex flex-row space-x-60 m-40'>
                <div className='flex flex-col space-y-40'>
                    <div>
                        <div  className='my-200 text-[42px] font-bold'>
                        Linger for Longer
                        </div>
                        <h3 >Escape for longer and re-energise</h3>
                    </div>
                    <div>
                        <ul class="list-disc">
                            <li>Minimum stays for 5 nights starting at just THB 1,890++/night</li>
                            <li>Choice of room only or room & breakfast rates</li>
                            <li>Free stay for up to 2 children *</li>
                        </ul>
                    </div>
                    <button type='button' className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:scale-110 `}>Booking Now</button>
                    
                </div>
                <div>
                    <img src={offer0_1} alt="offer0_1"className="md:rounded-lg" />
                </div>
            </div>
            <div >
                <div className='text-center	font-bold text-[36px]'>Offer Details</div>
                <hr className='border-3 border-[#D4990D] w-1/4 mx-auto my-10'/>
                <div className='mx-40'>
                    <p>
                    With borders open and restrictions lifted, it’s time to rediscover the excitement of travel. Make up for those lost holidays with an extended getaway with Chandra, your home away from home
                    </p>
                    <br></br>
                    <p> 
                        Whether you need to feel the sand between your toes, breathe in that cool mountain air or enjoy the energy of a bustling city, Chandra has a destination to suit your needs. And with our long-stay special deals, you can travel with a vengeance.
                    </p>
                    <br></br>
                    <p>Enjoy special rates from THB 1,890++
/ nigth when you book a 5-night minimum stay at Chandra, and we will make sure you leave feeling refreshed and energised.</p>
                    <br></br>
                    <p>Chandra has a selection of spacious rooms, suites and beach house, all equipped with convenient in-room facilities including high-speed Wi-Fi access.</p>
                    <br />
                    <p>Terms & Conditions</p>
                    <ul class = 'list-disc'>
                        <li>
                            Offer applicable to new bookings only  
                        </li>
                        <li>
                            Minimum of 5, 7, 10 or 14-night stay.  
                        </li>
                        <li>
                            Complimentary breakfast. 
                        </li>
                        <li>
                            Up to 2 children under 12 years old can stay for free, depending on room configuration and only when sharing existing beds with parents or when an extra bed is not required.
                        </li>
                        <li>
                            Additional breakfast surcharge is applicable for all children sharing existing bed with parents. 
                        </li>
                        <li>
                            Surcharge may be applied for stays on Saturdays and public holiday.  
                        </li>
                        <li>
                            Blackout dates may apply.  
                        </li>
                        <li>
                            Rates are exclusive of service charge and prevailing government tax. 
                        </li>
                        <li>
                        Bookings can be modified or cancelled, without any cancellation fees, up to 7 days prior to arrival. Cancellations received after that will incur a one-night charge.
                        </li>
                    </ul>
                </div>
                <br />
                <div className='flex flex-row flex-wrap space-x-20  m-40  space-evenly justify-center' >
                    <div className={`${styles.off1_box}`}>
                        <img src={offer2_0} alt="off2_0" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer2_1} alt="off2_1" />
                    </div>
                    <div className={`${styles.off1_box}`}>
                        <img src={offer2_2} alt="off2_2" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offer2