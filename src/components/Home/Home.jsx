import React, { useEffect } from 'react';

import Slideshow from '../Slideshow/Slideshow.jsx';
import Section from './Section/Section.jsx';

import { offerUrl, roomDetailUrl } from '../../constants/pathUrl.js';
import { offers, rooms } from '../../constants/text.js';
// import { getOffers } from '../../actions/offers.js';

const Home = ({ setNavbarBg }) => {
  
    // const { offers, isLoading } = useSelector((state) => state.offers); 
    // const { rooms, isLoading } = useSelector((state) => state.offers); 
    
  useEffect(() => {
      // dispatch(getOffers());
      setNavbarBg('')
      window.scrollTo(0, 0)
  }, []);

  return (
    <div className="w-full pb-40">
      <Slideshow />
      <div className='w-full mt-28'>
        <div className='text-center text-primary md:text-5xl sm:text-3xl text-2xl mb-5'>THE CHANDRA</div>
        <div className='text-center text-primary md:text-8xl sm:text-6xl text-5xl'>Experience the difference</div>
        <Section title='New Journeys Begin Now' items={offers} imgW="270px" imgH="340px" url={`${offerUrl}/details`} />
        <Section title='Select Room Types' items={rooms} imgW="270px" imgH="340px" url={roomDetailUrl} />
      </div>
      
    </div>
  )
}

export default Home