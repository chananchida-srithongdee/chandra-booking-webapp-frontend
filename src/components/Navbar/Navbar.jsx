import React, { useState, useEffect} from 'react'

import { logo, close, menu } from '../../images';
import styles from './styles';
import { Link } from 'react-router-dom';
import { homeUrl,offerUrl,discoverUrl,contactUsUrl,bookingUrl } from '../../constants/pathUrl'

const Navbar = ({ navbarBg }) => {

    const [toggle, setToggle] = useState(false);
    const [scrollY, setScrollY] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setToggle(false);
        };
        const handleScroll = () => {
            setScrollY(true);
            if(window.pageYOffset <= 0){
                setScrollY(false);
            }
        };
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    }, []);


    return (
        <nav className={`${styles.navContainer} ${navbarBg} ${!navbarBg && (scrollY ? 'bgfade' : 'bgfadeout')}`}>
            <div className={styles.container}>
                <div className="flex items-center">
                    <Link to={homeUrl}><img src={logo} alt="chandra" className="cursor-pointer sm:w-40 w-[150px] object-contained mr-20" /></Link>
                    <Link to={discoverUrl}><div className={styles.menuText}>Discover Chandra</div></Link>
                    <Link to=""><div className={styles.menuText}>Events</div></Link>
                    <Link to={offerUrl}><div className={styles.menuText}>Offers</div></Link>
                    <Link to={contactUsUrl}><div className={`${styles.menuText} mr-0`}>Contact Us</div></Link>
                </div>
                
                <Link to={bookingUrl}><div className={styles.checkRates}>Check Rates</div></Link>

                <div className="lg:hidden flex justify-end items-center">
                    <img src={toggle ? close : menu} alt="menu" className="cursor-pointer w-[28px] h-[28px] object-contain opacity-80" onClick={() => setToggle((prev) => !prev)} />
                </div>

                <div className={`${toggle ? 'block' : 'hidden'} ${styles.menuTextContainer} ${scrollY && toggle ? 'bgfadeyellow' : 'bg-slate-50/20'}`}>
                    <Link to={discoverUrl}><div className={styles.menuTextCol}>Discover Chandra</div></Link>
                    <Link to=""><div className={styles.menuTextCol}>Events</div></Link>
                    <Link to={offerUrl}><div className={styles.menuTextCol}>Offers</div></Link>
                    <Link to={contactUsUrl}><div className={styles.menuTextCol}>Contact Us</div></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar