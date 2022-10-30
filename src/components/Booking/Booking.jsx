import React, { useEffect, useState } from 'react'
import styles from './styles';

import { rooms } from '../../constants/text';
import Slideshow from '../Slideshow/Slideshow.jsx';
import BookingDetail from './BookingDetail/BookingDetail.jsx';
import Roomdetail from './Roomdetail/Roomdetail';
import GuestSelect from './GuestSelect/GuestSelect';
import DateSelect from './DateSelect/DateSelect';

const initialState = { guest: { adult: 0, child: 0 }, checkInDate: new Date(), checkOutDate: new Date(), roomsCount: [] }

const Booking = ({ setNavbarBg }) => {

    const [bookingData, setBookingData] = useState(initialState);

    const getRoomDetail = () => {
        let temp = [];
        for (let i = 0; i < rooms.length; i++) {
            temp.push({id: rooms[i]._id, title: rooms[i].title, bf: 0, nobf: 0, min: rooms[i].price.min, max: rooms[i].price.max, person: rooms[i].room.person });
        };
        return temp;
    };
    var roomDetail = getRoomDetail();
    var maxGuest = 0

    useEffect(() => {
        setNavbarBg('');
        // window.scrollTo(0, 0);
    },[]);

    useEffect(() => {
        if(bookingData.roomsCount){
            for (let i = 0; i < bookingData.roomsCount.length; i++) {
                for (let j = 0; j < roomDetail.length; j++) {
                    if(bookingData.roomsCount[i].id === roomDetail[j].id && bookingData.roomsCount[i].bf === true){
                        roomDetail[j].bf += 1;
                        maxGuest += roomDetail[j].person;
                    } else if(bookingData.roomsCount[i].id === roomDetail[j].id && bookingData.roomsCount[i].bf === false){
                        roomDetail[j].nobf += 1;
                        maxGuest += roomDetail[j].person;
                    }
                };
            }
        }
    },[bookingData]);

    
    return (
        <div className="w-full caret-transparent">
            <Slideshow displayText={false} />
            <div className="flex flex-col lg:flex-row justify-center w-full py-32 px-32">
                <div className="lg:w-2/3 w-full">
                    <div className="flex border-[1px] border-black/20 rounded-lg lg:mr-28">
                        <GuestSelect bookingData={bookingData} setBookingData={setBookingData} adult={bookingData.guest.adult} child={bookingData.guest.child} maxGuest={maxGuest} />
                        <DateSelect bookingData={bookingData} setBookingData={setBookingData} />
                    </div>
                    <div>
                        <div className="font-bold text-secondary text-3xl my-6">Select Room</div>
                        {rooms.map((room) => (
                            <div key={room._id}>
                                <Roomdetail room={room}/>
                            </div>
                        ))}   
                    </div>
                </div>
                <div className="lg:justify-start justify-center flex">
                    <BookingDetail bookingData={bookingData} rooms={roomDetail} />
                </div>
            </div>
        </div>
    )
}

export default Booking