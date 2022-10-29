import React, { useEffect } from 'react';

import styles from './styles';
import Slideshow from '../Slideshow/Slideshow.jsx';

const Home = ({ setNavbarBg }) => {
  
  useEffect(() => {
      setNavbarBg('')
      window.scrollTo(0, 0)
  }, []);

  return (
    <div className="w-full">
      <Slideshow />
    </div>
  )
}

export default Home