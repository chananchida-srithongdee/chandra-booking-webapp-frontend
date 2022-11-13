import React from 'react';

import { logo } from '../../images';
import styles from './styles';
import { Link } from 'react-router-dom';
import { footerLinks, socialMedia } from './text';

import IconButton from '@mui/material/IconButton';
const Footer = () => (
   <section className={`${styles.flexCenter} ${styles.paddingY} flex-col bg-primary caret-transparent`}>
      <div className={`${styles.flexStart} md:flex-row flex-col m-10 w-full`}>
         <div className="w-full flex sm:flex-row flex-col sm:justify-evenly justify-center">
            <img src={logo} alt="chandra resort" className="xl:w-[288px] w-[200px] min-w-[200px] h-[180px] object-contain sm:self-baseline self-center" />
            <div className="flex lg:flex-nowrap flex-wrap sm:flex-row flex-col">
               {footerLinks.map((footerlink) => (
                  <div key={footerlink.title} className="flex flex-col mx-16 sm:mt-0 mt-8">
                     <h4 className=" font-extrabold text-[18px] leading-[27px] text-white">{footerlink.title}</h4>
                     <ul className="list-none mt-4">
                        {footerlink.links.map((link, index) => (
                           <li
                              key={index}
                              className={`font-normal text-[16px] leading-[24px] text-white 
                                        ${index !== footerlink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
                           >
                              <Link to={link.link} className="hover:text-secondary cursor-pointer transition-all">
                                 {link.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
         <div className="flex flex-row justify-end md:mt-0 mt-6 mr-20 ">
            {socialMedia.map((socialMedia, index) => (
               <div key={index}>
                  <IconButton color="white" className="hover:text-secondary" onClick={() => window.open(socialMedia.link)}>
                     {socialMedia.icon}
                  </IconButton>
               </div>
            ))}
         </div>
      </div>
   </section>
);

export default Footer;
