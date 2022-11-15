import { bg } from "date-fns/locale";
import React, {useEffect} from "react";

import { events } from "../../constants/text.js";
import Allevent from './Allevent/Allevent.jsx'
// import allEventDetail from '../allEventDetails/allEventDetails.jsx'


const Allevents = ({ setNavbarBg}) => {
    useEffect(() => {

        setNavbarBg('bg-primary')
        // window.scrollTo(0, 0);
    }, []);

    return (
        <div className="ss:pt-35 pt-40 pb-20 w-full caret-transparent">
        <div className="ss:w-[390px] w-2/3 mx-auto mb-10 text-center font-bold text-primary ss:text-5xl text-4xl border-b-4 pb-4 border-secondary ">Featured Events</div>

        <div className="flex flex-wrap justify-center items-center">
            {events.map((allevent) => (
                <div key={allevent._id} className="mx-2">
                    <Allevent allevent ={allevent} />
                </div>
            ))}
        </div>
    </div>
    )
}

export default Allevents