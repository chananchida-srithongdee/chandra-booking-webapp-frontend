import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./styles.js";
import { offers } from "../../constants/text.js";
import { events } from "../../constants/text.js";
import { bookingUrl, alleventUrl } from "../../constants/pathUrl.js";
import Thumbnail from "../Thumbnail/Thumbnail.jsx";
// import { getOffer } from '../../actions/offers.js';

const EventDetails = ({ setNavbarBg }) => {
  // const { offer, offers, isLoading } = useSelector((state) => state.offers);
  const { id } = useParams();
  const event = events.filter(({ _id }) => _id === id)[0];
  const otherOffer = offers.filter(({ _id }) => _id !== id);

  // useEffect(() => {
  //     dispatch(getOffer(id));
  // }, [id])

  useEffect(() => {
    setNavbarBg("");
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-primary h-[800px] relative caret-transparent">
      <div className="m-auto overflow-hidden">
        <img
          src={event.mainImg}
          alt="chandra service"
          className="w-full h-[800px] object-cover transition-all ease-out duration-1000`}"
        />
        <div className="flex flex-col w-1/2 rounded-xl absolute ss:bottom-20 bottom-48 sm:left-24 left-10">
          <div
            className={`${styles.title} font-bold md:text-5xl sm:text-7xl ss:text-6xl text-4xl mb-10`}
          >
            {event.title}
          </div>
          <div className={`${styles.title} ss:text-2xl text-xl mb-10 ml-2`}>{event.detail}</div>
          <Link to={bookingUrl}>
            <div
              className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:text-shadow-none hover:bg-white hover:text-secondary border-2 border-secondary`}
            >
              {event.butt}
            </div>
          </Link>
        </div>
      </div>
      </div>
  );
};

export default EventDetails;
