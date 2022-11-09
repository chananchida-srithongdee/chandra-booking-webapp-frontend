import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import { Link } from 'react-router-dom';

import { roomDetailUrl } from '../../../constants/pathUrl';
import styles from './styles'

const Roomdetail = ({ room, bookingData, setBookingData, scrollRef }) => {

  const submitCondition = bookingData.checkIn_date && bookingData.checkOut_date && bookingData.guest.adult > 0;

  const handleChooseRoom = (e) => {
    if(submitCondition){
      if(e.target.getAttribute('bf') === 'false'){
        setBookingData({ ...bookingData, breakfast: false, roomType: { title: room.title, price: room.price.min}})
      }else{
        setBookingData({ ...bookingData, breakfast: true, roomType: { title: room.title, price: room.price.max}})
      }
    }
    scrollRef.current.scrollIntoView({behavior: "smooth"});
  }

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
          <Link to={`${roomDetailUrl}/${room.type}`} target="_blank"><div className={styles.btn}>More Room Details</div></Link>
        </div>
        <div className={`${styles.detailContainer} flex justify-between px-2 pt-3 xl:pb-14 h-full`}>
            <div>
                <div className={styles.price}>THB {room.price.min.toLocaleString()}</div>
                <div className="text-xs text-primary ml-1 mt-1">Per Night<br/>Excluding Taxes & Fees<br/>No Breakfast</div>
            </div>
            <button disabled={!submitCondition} onClick={handleChooseRoom} bf='false' className={styles.bookingbtn}>Booking Now</button>
        </div>
        <div className={`${styles.detailContainer} flex justify-between px-2 pt-3 xl:pb-14 h-full`}>
            <div>
                <div className={styles.price}>THB {room.price.max.toLocaleString()}</div>
                <div className="text-xs text-primary ml-1 mt-1">Per Night<br/>Excluding Taxes & Fees<br/>With Breakfast</div>
            </div>
            <button disabled={!submitCondition} onClick={handleChooseRoom} bf='true' className={styles.bookingbtn}>Booking Now</button>
        </div>
      </div>
    </div>
  )
}

export default Roomdetail