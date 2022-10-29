import React, { useEffect } from 'react';

import Header from '../Header/Header.jsx';
import Details from "./Details/Details.jsx";
import { discoverData } from "../../constants/text.js";
import { bgDiscover } from "../../images/index.js";

const Discover = ({ setNavbarBg }) => {

  useEffect(() => {
      setNavbarBg('')
      window.scrollTo(0, 0)
  }, []);

  return (
    <div className="w-full">
      <Header imgSrc={bgDiscover} imgAlt="chandra resort" />
      <div className="flex flex-col justify-center items-center my-20 sm:px-40 px-12">
        {discoverData.map((item, index) => (
            <div key={index}>
              <Details imgSrc={item.image} imgAlt="chandra service" headText={item.head} subHeadText={item.subHead} detail={item.detail} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Discover;

