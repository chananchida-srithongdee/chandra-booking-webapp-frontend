import React from 'react'
import { useNavigate } from "react-router-dom";

import { ButtonBase } from '@mui/material'
import { offerUrl } from '../../../constants/pathUrl';
import Thumbnail from '../../Thumbnail/Thumbnail.jsx';
import muiStyles from './muiStyles.js';

const Offer = ({ offer }) => {

    const navigate = useNavigate();
    
    const openOffer = () => navigate(`${offerUrl}/details/${offer._id}`);

    return (
        <ButtonBase style={muiStyles.cardAction} className="hover:bg-gray-300/60" onClick={openOffer}>
            <Thumbnail imgW="270px" imgH="340px" imgSrc={offer.mainImg} imgAlt="chandra service" head={offer.title} detail={offer.detail}/>
        </ButtonBase>
    )
}

export default Offer