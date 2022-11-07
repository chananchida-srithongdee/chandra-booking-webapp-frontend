import React, { useState, useEffect} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';

import { logo } from '../../images';
import styles from './styles';
import { Link } from 'react-router-dom';
import { offerUrl, discoverUrl, contactUsUrl, homeUrl, bookingUrl } from '../../constants/pathUrl'


const Navbar = ({ navbarBg }) => {

    const [toggle, setToggle] = useState(false);
    const [scrollY, setScrollY] = useState(false);
    const [bgMenuDrop, setbgMenuDrop] = useState(false);

    const handleClick = () => {
        setToggle(false);
    }

    useEffect(() => {
        if(navbarBg === ''){
            setbgMenuDrop(false);
        }else{
            setbgMenuDrop(true);
        }
    }, [navbarBg]);

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
                    <Link to={homeUrl} onClick={handleClick}><img src={logo} alt="chandra" className="cursor-pointer sm:w-40 w-[150px] object-contained mr-20" /></Link>
                    <Link to={discoverUrl}><div className={styles.menuText}>Discover Chandra</div></Link>
                    {/* <Link to=""><div className={styles.menuText}>Events</div></Link> */}
                    <Link to={offerUrl}><div className={styles.menuText}>Offers</div></Link>
                    <Link to={contactUsUrl}><div className={`${styles.menuText} mr-0`}>Contact Us</div></Link>
                </div>
                <Link to={bookingUrl}><div className={styles.checkRates}>Check Rates</div></Link>

                <div className="lg:hidden flex justify-end items-center cursor-pointer" onClick={() => setToggle((prev) => !prev)}>
                    {toggle ? <CloseIcon color='white' fontSize='large'/> : <MenuIcon color='white' fontSize='large'/>} 
                </div>

                <div className={`${toggle ? 'block' : 'hidden'} ${styles.menuTextContainer} ${((scrollY && toggle) || bgMenuDrop) ? 'bgfadeyellow' : 'bg-slate-50/20'}`}>
                    <Link to={bookingUrl} onClick={handleClick}><div className={styles.menuTextCol}>Check Rates</div></Link>
                    <Link to={discoverUrl} onClick={handleClick}><div className={styles.menuTextCol}>Discover Chandra</div></Link>
                    {/* <Link to="" onClick={handleClick}><div className={styles.menuTextCol}>Events</div></Link> */}
                    <Link to={offerUrl} onClick={handleClick}><div className={styles.menuTextCol}>Offers</div></Link>
                    <Link to={contactUsUrl} onClick={handleClick}><div className={styles.menuTextCol}>Contact Us</div></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar