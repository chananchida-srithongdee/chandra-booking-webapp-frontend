import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import { rooms } from '../../constants/text';
import Slideshow from '../Slideshow/Slideshow.jsx';
import BookingDetail from './BookingDetail/BookingDetail.jsx';
import Roomdetail from './Roomdetail/Roomdetail.jsx';
import GuestSelect from './GuestSelect/GuestSelect.jsx';
import DateSelect from './DateSelect/DateSelect.jsx';
import Payment from './Payment/Payment.jsx';


const Booking = ({ setNavbarBg }) => {
    // const { rooms } = useSelector((state) => state.rooms);

    const roomsList = rooms.map((room) => ({ id: room._id, title: room.title, bf: 0, nobf: 0, min: room.price.min, max: room.price.max, person: room.maxPerson }))
    const initialState = { guest: { adult: 0, child: 0 }, checkInDate: '', checkOutDate: '', roomsCount: roomsList }
    const [bookingData, setBookingData] = useState(initialState);
    const [isPayment, setIsPayment] = useState(false);
    
    const checkIn = new Date(bookingData.checkInDate);
    const checkOut = new Date(bookingData.checkOutDate);
    const totalNights = Math.ceil(Math.abs(checkOut.getTime() - checkIn.getTime()) / (1000 * 3600 * 24)) || 0;

    const calTotalPayment = () => {
        var temp = 0;
        bookingData.roomsCount.forEach((room) => {
            temp += ((room.bf*room.max) + (room.nobf*room.min))
        })
        return temp *= totalNights;
    }

    const calMaxGuest = () => {
        var temp = 0;
        bookingData.roomsCount.forEach((room) => {
            temp += (room.person)*(room.bf + room.nobf)
        })
        return temp;
    }
    const maxGuest = calMaxGuest();
    const totalPayment = calTotalPayment();

    useEffect(() => {
        if(bookingData.guest.adult + bookingData.guest.child > maxGuest){
            setBookingData({ ...bookingData, guest : { adult: 0, child: 0 }})
        }
    },[bookingData.roomsCount]);

    useEffect(() => {
        setNavbarBg('');
        window.scrollTo(0, 0);

        //dispatch getRooms
    },[]);
    
    useEffect(() => {
        //dispatch getRoomsAvailableByDate(checkInDate, checkOutDate)

    },[bookingData.checkInDate, bookingData.checkOutDate]);

    return (
        <div className="w-full">
            <Slideshow displayText={false} />
            <div className="flex flex-col-reverse lg:flex-row lg:flex-row justify-center w-full py-32 xl:px-32 md:px-20 px-10">
                {isPayment ? <Payment bookingData={bookingData} /> : (
                <div className="lg:w-2/3 w-full xl:mr-28 lg:mr-7 caret-transparent">
                    <div className="flex ss:flex-row flex-col border-[1px] border-black/20 rounded-lg ">
                        <DateSelect bookingData={bookingData} setBookingData={setBookingData} />
                        <GuestSelect bookingData={bookingData} setBookingData={setBookingData} adult={bookingData.guest.adult} child={bookingData.guest.child} maxGuest={maxGuest} />
                    </div>
                    <div>
                        <div className="font-bold text-secondary text-3xl my-6">Select Room</div>
                        {rooms.map((room) => (
                            <div key={room._id}>
                                <Roomdetail bookingData={bookingData} setBookingData={setBookingData} room={room} />
                            </div>
                        ))}   
                    </div>
                </div>
                )}
                <div className="lg:justify-start justify-center flex mb-10 caret-transparent">
                    <BookingDetail bookingData={bookingData} totalPayment={totalPayment} totalNights={totalNights} isPayment={isPayment} setIsPayment={setIsPayment} />
                </div>
            </div>
        </div>
    )
}

export default Booking