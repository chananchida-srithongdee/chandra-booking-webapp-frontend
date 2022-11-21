import React, { useEffect, useState } from 'react';
import { TextField, MenuItem, Checkbox, FormControlLabel, InputAdornment } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CheckIcon from '@mui/icons-material/Check';

import { prefix, policies } from '../../../constants/text.js';
import styles from './styles.js';
import { createBooking } from '../../../api/index.js';

const Payment = ({ bookingData, setBookingData, setIsBookingLoading, setFinishBooking, initialState }) => {
   const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
   const { fname, lname, email, phone, address, addition } = bookingData;
   const [agree, setAgree] = useState(false);
   const [invalidEmail, setInvalidEmail] = useState(false);
   const [verifyEmail, setVerifyEmail] = useState(false);
   const [seconds, setSeconds] = useState(60);
   const [timeActive, setTimeActive] = useState(false);

   const submitCondition = fname && lname && phone.length >= 10 && address && email && verifyEmail && agree;

   const handleInvalidEmail = () => {
      setInvalidEmail(true);
      setTimeout(() => {
         setInvalidEmail(false);
      }, 6000);
   };

   const reset = () => {
      setSeconds(60);
      setTimeActive(false);
   };

   const handleSendEmail = () => {
      if (emailRegex.test(email)) {
         setVerifyEmail(true);
         //dispatch(verifyEmail(email)) post
         //dispatch(getVerifiedComfirm) get

         setTimeActive(true);
      } else {
         handleInvalidEmail();
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (submitCondition) {
         const data = { ...bookingData, roomType: bookingData.roomType.type };
         console.log(data);
         try {
            setFinishBooking(true);
            setIsBookingLoading(true);
            await createBooking(data);
            setIsBookingLoading(false);
            setBookingData(initialState);
         } catch (error) {
            console.log(error);
         }
      }
   };

   const handleEditStay = () => {
      setBookingData({ ...bookingData, breakfast: null, roomType: { title: '', price: 0 } });
   };

   const handleMailChange = (e) => {
      if (!timeActive) {
         if (e.target.value.length <= 200) {
            setBookingData({ ...bookingData, [e.target.name]: e.target.value });
         }
      }
   };

   useEffect(() => {
      let interval = null;
      if (timeActive && seconds > 0) {
         interval = setInterval(() => {
            setSeconds((prev) => prev - 1);
         }, 1000);
      } else if (seconds <= 0) {
         reset();
      }
      return () => clearInterval(interval);
   }, [timeActive, seconds]);

   const handleChange = (e) => {
      if (e.target.name === 'addition') {
         if (e.target.value.length <= 400) {
            setBookingData({ ...bookingData, [e.target.name]: e.target.value });
         }
      } else if (e.target.name === 'phone') {
         if (e.target.value.replace(/[0-9]*/, '') === '' && e.target.value.length <= 10) {
            setBookingData({ ...bookingData, [e.target.name]: e.target.value });
         }
      } else {
         if (e.target.value.length <= 200) {
            setBookingData({ ...bookingData, [e.target.name]: e.target.value });
         }
      }
   };

   return (
      <form autoComplete="off" noValidate className="flex flex-col border-[1px] rounded-xl ss:px-14 xs:px-8 px-4 py-10 lg:w-2/3 w-full" onSubmit={handleSubmit}>
         <div
            onClick={handleEditStay}
            className={`${styles.flexCenter} border border-primary/30 caret-transparent mb-8 text-xl text-primary w-[180px] h-[50px] rounded-xl cursor-pointer hover:bg-primary/10 transition-all`}
         >
            <ArrowBackIosNewIcon fontSize="small" />
            &nbsp;Edit Your Stay
         </div>
         <div className="mb-4">
            <div className={styles.headText}>Contact Info</div>
            <div className="w-full flex flex-col">
               <div className={styles.row}>
                  <div className={`flex ${styles.firstHalf}`}>
                     <div className="w-[120px]">
                        <TextField select name="prefix" label="Prefix" value={bookingData.prefix} onChange={handleChange} fullWidth required>
                           {prefix.map((p) => (
                              <MenuItem key={p.value} value={p.value}>
                                 {p.label}
                              </MenuItem>
                           ))}
                        </TextField>
                     </div>
                     <div className="w-full">
                        <TextField name="fname" label="First Name" fullWidth value={fname} onChange={handleChange} required />
                     </div>
                  </div>
                  <div className={styles.half}>
                     <TextField name="lname" label="Last Name" fullWidth value={lname} onChange={handleChange} required />
                  </div>
               </div>
               <div className={styles.row}>
                  <div className={styles.firstHalf}>
                     <TextField name="phone" label="Phone Number (+66)" type="tel" fullWidth value={phone} onChange={handleChange} required />
                  </div>
                  <div className={styles.half}>
                     <TextField
                        disabled={timeActive}
                        name="email"
                        label="Email Address"
                        type="email"
                        error={invalidEmail}
                        fullWidth
                        value={email}
                        onChange={handleMailChange}
                        required
                        helperText="This is the e-mail we will send your confirmation to."
                        InputProps={{
                           endAdornment: (
                              <InputAdornment position="end">
                                 {verifyEmail ? (
                                    <div className={`${styles.verify} bg-green-500`}>
                                       <CheckIcon color="white" fontSize="small" />
                                    </div>
                                 ) : (
                                    <div className={`${styles.verify} bg-primary/30`}>
                                       <CheckIcon color="white" fontSize="small" />
                                    </div>
                                 )}
                              </InputAdornment>
                           ),
                        }}
                     />
                  </div>
               </div>
               <button
                  onClick={handleSendEmail}
                  disabled={timeActive}
                  className="disabled:bg-primary/50 bg-secondary text-white text-xl rounded-xl px-5 py-2 w-fit self-end mt-3 hover:bg-primary transition-all"
               >
                  Send Verification Email&nbsp;{timeActive && `(${seconds})`}
               </button>
            </div>
         </div>
         <div className="mb-8">
            <div className={styles.headText}>Address</div>
            <div className={styles.half}>
               <TextField name="address" label="Country" fullWidth value={address} onChange={handleChange} required />
            </div>
         </div>
         <div className="mb-4">
            <div className={styles.headText}>Additional Details and Preferences</div>
            <TextField name="addition" multiline rows={4} placeholder="Please note your requests or special needs" fullWidth value={addition} onChange={handleChange} />
         </div>
         <div className="mb-4 w-1/2">
            <div className={styles.headText}>Payment Information</div>
            <TextField name="cardnumber" label="Card Number" fullWidth required />
            <div className="flex my-4 space-x-3">
               <div className="w-3/4">
                  <TextField name="expdate" label="Expiration Date (MM/YY)" fullWidth required />
               </div>
               <div className="w-1/4">
                  <TextField name="cvv" label="CVV" fullWidth required />
               </div>
            </div>
            <TextField name="cardname" label="Name of Card" fullWidth required />
         </div>
         <div className="mb-4">
            <div className={`${styles.headText} mb-2`}>Policies</div>
            <div className="text-md text-primary mb-2">Please read the following policies.</div>
            <ul className="text-md text-primary list-disc ml-6">
               {policies.map((policy, index) => (
                  <li key={index}>{policy}</li>
               ))}
            </ul>
         </div>
         <div className="mb-4">
            <div className={`${styles.headText} mb-2`}>Acknowledge</div>
            <FormControlLabel
               sx={{ color: '#484848' }}
               control={<Checkbox color="secondary" disableRipple size="small" onChange={(e) => setAgree(e.target.checked)} />}
               label="I agree with the Policies and Privacy Terms"
            />
            <div className="text-md text-primary mb-2">By completing this booking, I agree with the Booking Conditions.</div>
         </div>
         <button
            disabled={!submitCondition}
            type="submit"
            className={`${styles.flexCenter} disabled:bg-primary/40 self-center mt-5 text-white sm:text-2xl text-xl font-bold bg-secondary w-[240px] h-[55px] rounded-xl hover:bg-primary transition-all`}
         >
            Complete Booking
         </button>
         {!submitCondition && <div className="text-sm text-red-600 self-center mt-2">Please fulfilled the required information and verify your email address first</div>}
      </form>
   );
};

export default Payment;
