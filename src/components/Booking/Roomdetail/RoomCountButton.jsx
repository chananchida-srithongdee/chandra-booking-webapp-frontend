import styles from './styles';

const GuestCountButton = ({  bookingData, setBookingData, room, isBf, setShowLimitRoom }) => {

    const timeout = 2000;
    const handleShowLimitRoom = () => {
        setShowLimitRoom(true)
        setTimeout(() => (setShowLimitRoom(false)),timeout)
    };

    const handleIncrease = () => {
        var newRoomsCount;
        if(isBf){
            newRoomsCount = bookingData.roomsCount.map((r) => {
                if(r.id === room._id){
                    if(r.bf+r.nobf >= room.available){
                        handleShowLimitRoom();
                        return {...r, bf: r.bf}
                    }else{
                        return {...r, bf: r.bf + 1}
                    }
                }else{
                    return r
                }
            })
        }else{
            newRoomsCount = bookingData.roomsCount.map((r) => {
                if(r.id === room._id){
                    if(r.bf+r.nobf >= room.available){
                        handleShowLimitRoom();
                        return {...r, nobf: r.nobf}
                    }else{
                        return {...r, nobf: r.nobf + 1}
                    }
                }else{
                    return r
                }
            })
        }
        setBookingData({ ...bookingData, roomsCount : newRoomsCount})
    };

    const handleDecrease = () => {
        var newRoomsCount;
        if(isBf){
            newRoomsCount = bookingData.roomsCount.map((r) => (r.id === room._id ? r.bf <= 0 ? {...r, bf: 0} : {...r, bf: r.bf - 1} : r))
        }else{
            newRoomsCount = bookingData.roomsCount.map((r) => (r.id === room._id ? r.nobf <= 0 ? {...r, nobf: 0} : {...r, nobf: r.nobf - 1} : r))
        }
        setBookingData({ ...bookingData, roomsCount : newRoomsCount})
        setShowLimitRoom(false)
    };

    return (
    <div className={`${styles.detailContainer} flex justify-between px-2 py-3 h-full`}>
        <div>
            <div className={styles.price}>THB {isBf ? room.price.max.toLocaleString() : room.price.min.toLocaleString()}</div>
            <div className="text-xs text-primary ml-1 mt-1">Per Night<br/>Excluding Taxes & Fees<br/>{isBf ? 'With Breakfast' : 'No Breakfast'}</div>
        </div>
        <div className="flex border-[1px] border-secondary h-fit">
            <div className={`${styles.button}`} onClick={handleDecrease}>-</div>
            <div className="w-[40px] h-[35px] bg-gray-300 flex justify-center items-center text-lg">{isBf ? bookingData.roomsCount.find((r) => (r.id === room._id)).bf : bookingData.roomsCount.find((r) => (r.id === room._id)).nobf}</div>
            <div className={`${styles.button}`} onClick={handleIncrease}>+</div>
        </div>
    </div>
    )
}

export default GuestCountButton