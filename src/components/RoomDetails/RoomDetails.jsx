import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

import PreviewImage from './PreviewImage/PreviewImage.jsx';
import { rooms } from '../../constants/text.js';
import { bookingUrl } from '../../constants/pathUrl.js';
import styles from './styles.js';

const RoomDetails = ({ setNavbarBg }) => {
  // const { room } = useSelector((state) => state.rooms);
  const { id } = useParams();
  const room = rooms.filter((room) => (room.type === id))[0]

  useEffect(() => {
    setNavbarBg('bg-primary');
    window.scrollTo(0, 0);

    //dispatch(getRoomById(id))
  }, []);

  return (
    <div className="w-full ss:pt-44 pt-40 pb-20 xl:px-72 lg:px-32 px-10 caret-transparent flex flex-col justify-center items-center">
      <PreviewImage imgs={room.img} />
      <div className='flex md:flex-row flex-col w-full mt-8'>
        <div className='md:w-2/3 w-full'>
          <div className='ss:text-4xl text-3xl text-primary font-bold mb-3'>{room.title}</div>
          <div className={styles.subHead}>{room.maxPerson} Persons</div>
          {room.room.map((r,index) => (
            r.type === "Bedroom" ? (
            <div key={index} className={styles.subHead}>{r.quantity} {r.type}(s) | {room.beds.map((bed) => (bed.quantity > 0 && `${bed.quantity} ${bed.type}(s) `))}</div>
            ):(
            <div key={index} className={styles.subHead}>{r.quantity} {r.type}(s)</div>
          )))}
          <div className={styles.subTitle}>Room Details</div>
          <div className='text-lg text-primary text-justify ml-2'>{room.detail}</div>
          <div className={styles.subTitle}>Amenities</div>
          <ul className='text-lg text-primary list-disc ml-6'>
            {room.amenities?.map((ame, index) => (
              <li key={index}>{ame}</li>
            ))}
          </ul>
          <ul className='text-lg text-primary mt-3'>
            {room.rules?.map((rule, index) => (
              <li className="flex items-center mt-2" key={index}>
                <DoNotDisturbIcon color='error' fontSize='small'/>
                <div className='text-red-600 ml-1'>{rule}</div>
              </li>
            ))}
          </ul>
        </div>
        <div className='md:w-1/3 ss:w-2/3 w-full md:mt-0 mt-5 mx-auto h-fit md:ml-20 rounded-xl shadow-xl ss:px-10 px-8 py-8'>
            <div className='text-red-600 text-2xl pb-3 mb-4 border-b-[1px]'>THB {room.price.min.toLocaleString()} - {room.price.max.toLocaleString()}</div>
            <div className='text-primary/70 text-md leading-loose'>
              Room Only (no Breakfast) : {room.price.min.toLocaleString()}<br />
              Room with Breakfast : {room.price.max.toLocaleString()}
            </div>
            <Link to={bookingUrl}><div className={`${styles.button} mx-auto mt-8 text-2xl text-white w-fit bg-secondary border-2 border-secondary hover:bg-transparent hover:text-secondary`}>Booking Now</div></Link>
        </div>
      </div>
    </div>
  )
}

export default RoomDetails