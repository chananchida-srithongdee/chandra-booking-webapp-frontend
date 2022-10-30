import React from 'react'

import { logo } from '../../images';
import styles from './styles';
import { Link } from 'react-router-dom';
import { footerLinks,socialMedia } from "./index";

import  IconButton  from '@mui/material/IconButton';
const Footer = () => (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-primary`}>
        <div className={`${styles.flexStart} md:flex-row flex-col m-10 w-full`}>
            <div className="flex-[1.5] w-full flex flex-row justify-evenly flex-wrap md:mt-0 mt-10">
            <div className=" flex flex-col">
            <img
                src={logo}
                alt="chandra resort"
                className="w-[288px] h-[180px] object-contain"
            />
            </div>  
            {footerLinks.map((footerlink) => (
                <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
                <h4 className=" font-extrabold text-[18px] leading-[27px] text-white">
                    {footerlink.title}
                </h4>
                <ul className="list-none mt-4">
                    {footerlink.links.map((link, index) => (
                    <Link to={link.link}>
                        <li
                            key={link.name}
                            className={` font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer ${
                            index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                            }`}
                            >
                            {link.name}
                        </li>
                    </Link>
                    ))}
                </ul>
                </div>
            ))}
            </div> 
            <div className="flex flex-row justify-end md:mt-0 mt-6 mr-20 ">
                {socialMedia.map((socialMedia) => (
                    <IconButton sx={{ color: 'white' }} className='hover:text-secondary' onClick={() => window.open(socialMedia.link)}>
                        {socialMedia.icon}
                    </IconButton>   
                ))}
            </div>   
        </div>
        </section>
    );
    
    export default Footer;