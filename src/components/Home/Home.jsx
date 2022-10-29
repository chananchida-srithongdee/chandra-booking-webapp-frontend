import React, { useEffect } from 'react';

import styles from './styles';
import { bgHome } from '../../images';
import Header from '../Header/Header.jsx';

const Home = ({ setNavbarBg }) => {
  useEffect(() => {
      setNavbarBg('')
  }, []);
  return (
    <div className="w-full">
      <Header imgSrc={bgHome} imgAlt="chandra resort" />
    </div>
  )
}

export default Home