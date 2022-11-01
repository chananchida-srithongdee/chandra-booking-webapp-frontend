import React, { useEffect } from 'react'

const RoomDetails = ({ setNavbarBg }) => {

    useEffect(() => {
        setNavbarBg('');
        // window.scrollTo(0, 0);
    },[]);

  return (
    <div>RoomDetails</div>
  )
}

export default RoomDetails