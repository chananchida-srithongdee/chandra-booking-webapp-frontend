import React, { useState, useEffect} from 'react'

import { logo, close, menu } from '../../images';
import styles from './styles';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setToggle(false);
        }
        const handleScroll = () => {
            setScrollY(true);
            if(window.pageYOffset <= 0){
                setScrollY(false);
            }
        }
        window.addEventListener('resize', handleResize)
        window.addEventListener('scroll', handleScroll)
    }, []);


    return (
        <nav className={`${styles.navContainer} ${scrollY ? 'bgfade' : 'bgfadeout'}`}>
            <div className={styles.container}>
                <div className="flex items-center">
                    <img src={logo} alt="chandra" className="cursor-pointer sm:w-40 w-[150px] object-contained mr-20" />
                    <div className={styles.menuText}>Discover Chandra</div>
                    <div className={styles.menuText}>Events</div>
                    <div className={styles.menuText}>Offers</div>
                    <div className={`${styles.menuText} mr-0`}>Contact Us</div>
                </div>
                <div className={styles.checkRates}>Check Rates</div>

                <div className="lg:hidden flex justify-end items-center">
                    <img src={toggle ? close : menu} alt="menu" className="cursor-pointer w-[28px] h-[28px] object-contain opacity-80" onClick={() => setToggle((prev) => !prev)} />
                </div>

                <div className={`${toggle ? 'block' : 'hidden'} ${styles.menuTextContainer} ${scrollY && toggle ? 'bgfadeyellow' : 'bg-slate-50/20'}`}>
                    <div className={styles.menuTextCol}>Discover Chandra</div>
                    <div className={styles.menuTextCol}>Events</div>
                    <div className={styles.menuTextCol}>Offers</div>
                    <div className={styles.menuTextCol}>Contact Us</div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar