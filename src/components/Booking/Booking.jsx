import React from 'react'
import styles from './styles';
import Slideshow from '../Slideshow/Slideshow';


const Booking = () => {
    return (
    <div className="w-full">
        <Slideshow displayText={false} />
        <div className='grid grid-cols-3 gap-15'>
            {/* Room Types */}
            <div className='col-start-1 col-span-2'> 
                <div>

                </div>
                <span>Select a Room</span>
            </div>
            {/* invoice */}
            <div>
                <div className='bg-[#484848] m-20 p-5 rounded md:rounded-lg' >
                <span className='text-[#F5BE3B] text-xl  font-bold'>Your Stay</span>
                <div className='text-white'>
                    <div className='grid grid-cols-2 gap-5 text-white mb-5'>
                        <div>
                            <p >Check In</p>
                            <p>After 2:00 PM</p>
                        </div>
                        <div>
                            <p>Check Out</p>
                            <p>Before 12:00 PM</p>
                        </div>
                    </div>
                    <hr />
                    <div className='my-5'>
                        <p>Tue, Oct 11, 2022 - Wed,Oct 12, 2022</p>
                        <p>2 Adults</p>
                    </div>
                    <hr />
                    <div className='flex flex-row justify-between mt-5'>
                        <p>Total:</p>
                        <p className='font-bold text-xl'>THB 0.00</p>
                    </div>
                </div>
                
                
            </div>
            </div>
            
        </div>
    </div>
    )
}

export default Booking