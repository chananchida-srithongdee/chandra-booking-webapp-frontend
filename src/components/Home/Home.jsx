import React, { useEffect } from 'react';

import Slideshow from '../Slideshow/Slideshow.jsx';
import Section from './Section/Section.jsx';

import { offerUrl } from '../../constants/pathUrl.js';
import { offers } from '../../constants/text.js';
// import { getOffers } from '../../actions/offers.js';

const Home = ({ setNavbarBg }) => {
  
    // const { offers, isLoading } = useSelector((state) => state.offers); 
    
  useEffect(() => {
      // dispatch(getOffers());
      setNavbarBg('')
      window.scrollTo(0, 0)
  }, []);

  return (
    <div className="w-full pb-40">
      <Slideshow />
      <div className='w-full mt-32'>
        <div className='text-center text-primary text-5xl mb-5'>THE CHANDRA</div>
        <div className='text-center text-primary text-8xl'>Experience the difference</div>
        <Section title='New Journeys Begin Now' items={offers} imgW="270px" imgH="340px" url={offerUrl} />
      </div>
      
    </div>
  )
}

export default Home