import { useEffect } from 'react';
import bg from '../../images/contact-us/contact-us-bg.jpg';
import styles from './styles';
import muiStyles from './muiStyle';
import { TextField } from '@mui/material';

const ContactUs = ({ setNavbarBg }) => {
   useEffect(() => {
      setNavbarBg('');
      window.scrollTo(0, 0);
   }, []);

   const handleSubmit = () => {
      return;
   };

   return (
      <div>
         <div className="w-full h-[495px]">
            <img className="w-full h-full object-cover" src={bg} alt="2 women on the beach" />
         </div>
         <div className={`w-full ${styles.flexCenter} flex-col gap-[3rem] py-[3rem]`}>
            <div className={`w-full ${styles.flexCenter} flex-col`}>
               <span className={`${styles.primaryText}`}>Contact Us</span>
               <span className="mx-20 text-center text-[15px] mt-[.5rem]">
                  A lifetime of rare and inspiring experiences awaits. Our expert Reservations Team will help you tailor your dream Soneva holiday. Contact us and we will get back to you within 24
                  hours.
               </span>
            </div>
            <div className={`${styles.flexCenter} w-full mt-[2rem]`}>
               <form className="flex flex-col justify-start gap-4 w-full xl:px-[20rem] lg:px-48 ss:px-20 px-10" onSubmit={handleSubmit}>
                  <span className={`${styles.secondaryText}`}>Contact Info</span>
                  <div className="flex w-full sm:space-x-5 sm:flex-row flex-col">
                     <div className={`${styles.flexCenter} sm:w-1/2 w-full`}>
                        <div className="xs:w-1/6 w-2/6">
                           <TextField inputProps={{ style: muiStyles.prefix }} label="Prefix" variant="outlined" required fullWidth />
                        </div>
                        <div className="xs:w-5/6 w-4/6">
                           <TextField inputProps={{ style: muiStyles.fistName }} label="First Name" variant="outlined" required fullWidth />
                        </div>
                     </div>
                     <div className="sm:w-1/2 w-full sm:mt-0 mt-3">
                        <TextField inputProps={{ style: muiStyles.textField }} label="Last Name" variant="outlined" required fullWidth />
                     </div>
                  </div>
                  <div className="flex sm:space-x-5 w-full sm:flex-row flex-col">
                     <div className="sm:w-1/2 w-full">
                        <TextField inputProps={{ style: muiStyles.textField }} label="Mobile phone" variant="outlined" required fullWidth />
                     </div>
                     <div className="sm:w-1/2 w-full sm:mt-0 mt-3">
                        <TextField
                           inputProps={{ style: muiStyles.textField }}
                           label="Email Address"
                           variant="outlined"
                           required
                           helperText="This is the Email we will send your confirmation to."
                           fullWidth
                        />
                     </div>
                  </div>

                  <div className={`${styles.flexCenter} flex-col gap-2`}>
                     <span className={`${styles.secondaryText}`}>Message</span>
                     <TextField
                        placeholder="Tell us what you would like to know or let us know if you have any special requests"
                        variant="outlined"
                        rows="5"
                        required
                        multiline
                        fullWidth
                        inputProps={{ style: { fontSize: '12px' } }}
                     />
                  </div>
                  <div className={`${styles.flexCenter}`}>
                     <button className={`${styles.button}`} type="submit">
                        Submit
                     </button>
                  </div>
               </form>
            </div>

            <div className={`${styles.flexCenter} flex-col mt-[2rem] w-full`}>
               <div className={`${styles.secondaryText}`}>Direct Dial and Email Contacts</div>
               <div className="flex-col md:w-1/3 xs:w-2/3 w-5/6">
                  <div className="text-left text-[15px] mt-[.5rem]">Location: 89 Moo 4, Koh Kood Sub-District, Koh Kood District, Trat 23000, Thailand</div>
                  <div className="text-left text-[15px] mt-[.5rem]">Email: chandra@gmail.com</div>
                  <div className="text-left text-[15px] mt-[.5rem]">Phone: 026-549-2261</div>
               </div>
            </div>

            <div className={`${styles.flexCenter} flex-col mb-20 w-full`}>
               <div className={`${styles.secondaryText}`}>Resort Management</div>
               <div className="flex-col md:w-1/3 xs:w-2/3 w-5/6">
                  <div className="text-left text-[15px] mt-[.5rem]">Chananchida Srithongdee</div>
                  <div className="text-left text-[15px] mt-[.5rem]">Phone: 095 507 70665</div>
                  <div className="text-left text-[15px] mt-[.5rem]">Email: Chananchida@gmail.com</div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ContactUs;
