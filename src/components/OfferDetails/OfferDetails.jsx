import React,{ useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';

import styles from './styles.js';
import { offers } from '../../constants/text.js';
import { bookingUrl, offerUrl } from '../../constants/pathUrl.js';
import Thumbnail from '../Thumbnail/Thumbnail.jsx';
// import { getOffer } from '../../actions/offers.js';

const OfferDetails = ({ setNavbarBg }) => {

    // const { offer, offers, isLoading } = useSelector((state) => state.offers); 
    const { id } = useParams();
    const offer = offers.filter(({ _id }) => _id === id)[0];
    const otherOffer = offers.filter(({ _id }) => _id !== id);

    // useEffect(() => {
    //     dispatch(getOffer(id));
    // }, [id])

    useEffect(() => {
        setNavbarBg('bg-primary')
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="w-full ss:pt-48 pt-40 caret-transparent flex flex-col justify-center items-center">
            <div className='flex lg:flex-row flex-col-reverse justify-center items-center w-4/5'>
                <div className='flex flex-col ss:mr-20 lg:mt-0 mt-10'>
                    <div>
                        <div className='ss:text-5xl text-3xl font-bold'>{offer.title}</div>
                        <div className='text-2xl mt-3'>{offer.subtitle}</div>
                    </div>
                    <div className="xl:my-32 ss:my-16 my-10 ml-8">
                        <ul className="list-disc text-xl">
                            {offer.offerList?.map((olist, index) => (<li key={index}>{olist}</li>))}
                        </ul>
                    </div>
                    <div className="flex ss:justify-start justify-center">
                        <Link to={bookingUrl}><div className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:text-shadow-none hover:bg-white hover:text-secondary border-2 border-secondary`}>Booking Now</div></Link>
                    </div>
                </div>
                <img src={offer.mainImg} alt="chandra service" className="xl:w-[750px] w-[600px] lg:h-[540px] ss:h-[450px] h-[250px] object-cover rounded-lg" />
            </div>
            <div className="lg:mt-28 mt-16 w-4/5">
                <div className="ss:w-[400px] w-2/3 mx-auto text-center font-bold text-primary ss:text-4xl text-3xl border-b-4 pb-4 border-secondary">Offer Details</div>
                <div className='whitespace-pre-line mt-12 text-lg ss:text-xl text-justify'>{offer.detail}</div>
                <ul className="list-disc ss:text-xl text-lg mt-7 ml-7">
                    {offer.detailList?.map((dlist, index) => (<li key={index}>{dlist}</li>))}
                </ul>
                <div className='flex flex-row flex-wrap justify-center items-center mt-14 mb-10'>
                    {offer.otherImg?.map((img, index) => (
                        <img src={img} key={index} alt="chandra service" className='ss:w-[440px] w-11/12 ss:h-[300px] h-[200px] object-cover rounded-lg ss:mx-5 mx-0 my-5' />
                    ))}
                </div>
            </div>
            <div className="w-5/6 mb-28">
                <div className="border-t-[1px] border-primary/20 text-3xl pt-7 font-bold">Other Offers :</div>
                <div className="flex xl:hover:overflow-x-scroll overflow-x-scroll mt-5 pb-5">
                    {otherOffer.map(({ mainImg, _id, title, detail }) => (
                        <div key={_id}>
                            <Thumbnail imgW="270px" imgH="340px" imgSrc={mainImg} imgAlt="chandra service" head={title} detail={detail} linkTo={`${offerUrl}/details/${_id}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OfferDetails