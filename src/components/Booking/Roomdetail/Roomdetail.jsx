import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { roomDetailUrl } from '../../../constants/pathUrl';
import RoomCountButton from './RoomCountButton.jsx';
import styles from './styles'

const Roomdetail = ({ room, bookingData, setBookingData }) => {

  const [showLimitRoom, setShowLimitRoom] = useState(false);

  return (
    <div className="w-full border-[1px] p-5 my-4 rounded-xl border-black/20 flex sm:flex-row flex-col">
      <div className="flex-initial sm:w-2/5 w-full mr-8">
        <img src={room.img[0]} alt="chandra room" className="w-full h-60 object-cover rounded-xl mb-5" />
        <div className="flex justify-between">
          <ul>
            {room.amenities?.map((amenity, index) => (
                <li className={styles.ameText} key={index}>{amenity}</li>
            ))}
          </ul>
          <ul className='ml-3'>
            {room.rules?.map((rule, index) => (
            <li className="flex items-center mt-2" key={index}>
              <DoNotDisturbIcon color='error' fontSize='small'/>
              <div className={styles.rulesText}>{rule}</div>
            </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="sm:w-3/5 w-full flex flex-col sm:mt-0 mt-7">
        <div className={styles.detailContainer}>
          <div className='mb-7'>
            <div className="text-3xl font-bold text-primary">{room.title}</div>
            <div className="text-md text-primary/90 flex mt-1">
              <div className="pr-2 border-r-[1px] border-black/20">{room.maxPerson} {room.maxPerson > 1 ? 'Persons' : 'Person'}</div>
              {room.beds.map((bed, index) => ( bed.quantity > 0 && (
                <div key={index} className='ml-2'>
                  {bed.quantity} {bed.type}
                </div>
              )))}
            </div>
          </div>
          <Link to={`${roomDetailUrl}/${room._id}`} target="_blank"><div className={styles.btn}>More Room Details</div></Link>
        </div>
        <RoomCountButton bookingData={bookingData} setBookingData={setBookingData} room={room} isBf={false} setShowLimitRoom={setShowLimitRoom} />
        <RoomCountButton bookingData={bookingData} setBookingData={setBookingData} room={room} isBf={true} setShowLimitRoom={setShowLimitRoom} />
        {showLimitRoom && (
            <div className='text-red-600 text-right pt-3 text-md font-bold'>No Room Available</div>
        )}
      </div>
    </div>
  )
}

export default Roomdetail