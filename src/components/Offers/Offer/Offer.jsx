import React from 'react'

import { offerUrl } from '../../../constants/pathUrl';
import Thumbnail from '../../Thumbnail/Thumbnail.jsx';

const Offer = ({ offer }) => {

    return (
        <Thumbnail imgW="270px" imgH="340px" imgSrc={offer.img[0]} imgAlt="chandra service" head={offer.title} detail={offer.detail} url={`${offerUrl}/details/${offer._id}`} />
    )
}

export default Offer