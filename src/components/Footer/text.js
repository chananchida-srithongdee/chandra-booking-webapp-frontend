import { homeUrl, discoverUrl, offerUrl,bookingUrl,contactUsUrl } from '../../constants/pathUrl';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export const footerLinks = [
    {
        title: "ABOUT US",
        links: [
            {
                name: "Discover",
                link: discoverUrl
            },
            {
                name:  "Contact Us",
                link: contactUsUrl
            },  
        ],
    },
    {
        title: "HELP CENTER",
        links:[
            {
                name: "Find a Room",
                link: bookingUrl
            },
            {
                name: "Event",
                link: homeUrl
            },
            {
                name: "Offer",
                link: offerUrl
            },
            {
                name: "Check Rates",
                link: bookingUrl
            }
        ],
    },
    {
        title: "CONTACT US",
        links: [
            {
                name: "Phone: 026-549-2261"
            },
            {
                name: "Email: chandra@gmail.com"
            },
            {
                name: "Location:  89 Moo 4, Koh Kood Sub-District, Koh Kood District, Trat 23000, Thailand"
            },
        ],
    },
];
export const socialMedia = [
    {
        id: "social-media-1",
        icon: <InstagramIcon/>,
        link: "https://www.instagram.com/",
    },
    {
        id: "social-media-2",
        icon: <FacebookIcon/>,
        link: "https://www.facebook.com/",
    },
    {
        id: "social-media-3",
        icon: <TwitterIcon/>,
        link: "https://www.twitter.com/",
    },
];