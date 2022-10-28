import React, { useEffect } from 'react';

import Header from '../Header/Header.jsx';
import Details from "./Details/Details.jsx";
import { discoverData } from "../../constants/text.js";
import { bgDiscover } from "../../images/index.js";

const Discover = ({ setNavbarBg }) => {

  useEffect(() => {
      setNavbarBg('')
  }, []);

  return (
    <div className="w-full">
      <Header imgSrc={bgDiscover} imgAlt="chandra resort" />
      <div className="flex flex-col justify-center items-center my-20 sm:px-40 px-12">
        {discoverData.map((item, index) => (
            <div key={index}>
              <Details imgSrc={item.image} imgAlt={item.alt} headText={item.head} subHeadText={item.subHead} detail1={item.detail1} detail2={item.detail2} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Discover;

