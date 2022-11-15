import React from "react";
import { alleventUrl } from "../../../constants/pathUrl";
import Thumbnail from "../../Thumbnail/Thumbnail";

const Allevent = ({ allevent }) => {

    return (
        <Thumbnail  imgW="270px" imgH="340px" imgSrc={allevent.mainImg} imgAlt="chandra service" head={allevent.title} detail={allevent.detail} linkTo={`${alleventUrl}/details/${allevent._id}`} />
    )
}
export default Allevent