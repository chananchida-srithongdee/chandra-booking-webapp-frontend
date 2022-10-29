import React from 'react'

import { offerUrl } from '../../../constants/pathUrl';
import Thumbnail from '../../Thumbnail/Thumbnail.jsx';

const Offer = ({ offer }) => {

    return (
        <div key={offer._id}>
            <Thumbnail imgW="270px" imgH="340px" imgSrc={offer.mainImg} imgAlt="chandra service" head={offer.title} detail={offer.detail} linkTo={`${offerUrl}/details/${offer._id}`} />
        </div>
    )
}

export default Offer