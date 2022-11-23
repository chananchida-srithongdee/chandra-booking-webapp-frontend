import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './styles.js';
import { events } from '../../constants/text.js';
import { bookingUrl } from '../../constants/pathUrl.js';
import { Slider, TextField, MenuItem } from '@mui/material';
import Typography from '@mui/material/Typography';
import { prefix } from '../../constants/text.js';
import DateSelect from './DateSelect/DateSelect.jsx';
import { createEvent } from '../../api/index.js';

const EventDetails = ({ setNavbarBg }) => {
   const initialState = {
      prefix: '',
      fname: '',
      lname: '',
      email: '',
      phone: '',
      address: '',
      min_budget: 100000,
      max_budget: 3000000,
      company: '',
      zip: '',
      addition: '',
      start: '',
      end: '',
      place: '',
      type: '',
   };
   const { id } = useParams();
   const event = events.filter(({ _id }) => _id === id)[0];
   const [finishBooking, setFinishBooking] = useState(false);
   const [isBookingLoading, setIsBookingLoading] = useState(true);

   const [value, setValue] = useState([100000, 3000000]);
   const [eventData, setEventData] = useState({ ...initialState, type: event.type });
   const submitCondition =
      eventData.prefix &&
      eventData.fname &&
      eventData.lname &&
      eventData.phone &&
      eventData.address &&
      eventData.email &&
      eventData.start &&
      eventData.end &&
      eventData.min_budget &&
      eventData.max_budget &&
      eventData.company &&
      eventData.type &&
      eventData.place &&
      eventData.zip;

   const handleSliderChange = (e, newValue) => {
      setValue(newValue);
      setEventData({ ...eventData, min_budget: value[0], max_budget: value[1] });
   };

   const handleChange = (e) => {
      setEventData({ ...eventData, [e.target.name]: e.target.value });
   };
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (submitCondition) {
         try {
            console.log(eventData);
            setFinishBooking(true);
            setIsBookingLoading(true);
            await createEvent(eventData);
            setIsBookingLoading(false);
            setEventData(initialState);
         } catch (error) {
            console.log(error);
         }
      }
   };

   const handleBackToBooking = () => {
      setFinishBooking(false);
   };

   useEffect(() => {
      setNavbarBg('');
      // window.scrollTo(0, 0);
   }, []);

   return (
      <div className="w-full">
         <div className="bg-primary h-[800px] relative caret-transparent">
            <div className="m-auto overflow-hidden">
               <img src={event.mainImg} alt="chandra events" className="w-full h-[800px] object-cover transition-all ease-out duration-1000`}" />
               <div className="flex flex-col w-1/2 rounded-xl absolute ss:bottom-20 bottom-48 sm:left-24 left-10">
                  <div className={`${styles.title} font-bold md:text-5xl sm:text-7xl ss:text-6xl text-4xl mb-10`}>{event.title}</div>
                  <div className={`${styles.title} ss:text-2xl text-xl mb-10 ml-2`}>{event.detail}</div>
                  <Link to={bookingUrl}>
                     <div
                        className={`${styles.button} text-2xl ml-2 text-white w-fit bg-secondary text-shadow-xl hover:text-shadow-none hover:bg-white hover:text-secondary border-2 border-secondary`}
                     >
                        {event.butt}
                     </div>
                  </Link>
               </div>
            </div>
         </div>
         <div className="flex flex-col flex-wrap text-center mt-20 text-5xl font-bold mx-10">{event.subject}</div>
         <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="xl:w-5/12 w-5/6">
               <div className="mt-20 text-4xl font-bold">{event.inner}</div>
               <div className="text-xl py-10">{event.fidata}</div>
               <img src={event.dataImg} alt="chandra events" className="mx-auto ss:w-[800px] w-11/12 ss:h-[600px] h-[400px] object-cover rounded-xl" />
               <div className="text-xl py-10">{event.sedata}</div>
            </div>
            <div className="mt-10 xl:w-auto w-full">
               {event.otherImg?.map((img, index) => (
                  <img src={img} key={index} alt="chandra events" className="xl:ml-10 mx-auto xl:w-5/6 sm:w-1/2 w-2/3 object-cover rounded-xl my-5 " />
               ))}
            </div>
         </div>
         <div className="w-full mt-[10rem] text-center xs:text-4xl text-3xl font-bold text-primary/80">Request for a Proposal</div>
         <div className="w-full mb-[4rem] mt-5 text-center xs:text-4xl text-3xl font-bold">{event.eventtype}</div>
         {finishBooking ? (
            isBookingLoading ? (
               <div className="lg:w-2/3 w-full caret-transparent flex justify-center">
                  <svg className="animate-spin h-20 w-20 text-primary" fill="none" viewBox="0 0 24 24">
                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
               </div>
            ) : (
               <div className="lg:w-2/3 w-full caret-transparent flex flex-col items-center">
                  <div className="rounded-full w-14 h-14 bg-green-500 flex justify-center items-center mb-5">
                     <CheckIcon color="white" fontSize="large" />
                  </div>
                  <div className="font-bold text-3xl text-primary mb-3">Succesfully Booked</div>
                  <div className="text-xl mb-5 text-center">Check your email for a booking confirmation. We’ll see you soon!</div>
                  <button onClick={handleBackToBooking} className={styles.bookingbtn}>
                     Booking Mores
                  </button>
               </div>
            )
         ) : (
            <>
               <div className="flex w-1/2 mx-auto space-x-5">
                  <DateSelect eventData={eventData} setEventData={setEventData} />
                  <div className="w-1/6">
                     <TextField select name="place" label="Place" value={eventData.place} onChange={handleChange} fullWidth required>
                        {event.place.map((p) => (
                           <MenuItem key={p.value} value={p.value}>
                              {p.label}
                           </MenuItem>
                        ))}
                     </TextField>
                  </div>
               </div>
               <div className="flex flex-row flex-wrap justify-center items-center w-full">
                  <form className="flex flex-col justify-center items-center gap-4 w-full" onSubmit={handleSubmit}>
                     <div className="flex justify-center items-center md:w-2/3 w-5/6 sm:flex-row flex-col">
                        <div className="sm:pr-10 sm:w-1/2 w-full">
                           <span className={`${styles.headText} flex flex-row mb-4`}>Contact Info</span>
                           <div className="flex mb-[1rem] w-full">
                              <div className="w-[120px]">
                                 <TextField select name="prefix" label="Prefix" value={eventData.prefix} onChange={handleChange} fullWidth required>
                                    {prefix.map((p) => (
                                       <MenuItem key={p.value} value={p.value}>
                                          {p.label}
                                       </MenuItem>
                                    ))}
                                 </TextField>
                              </div>
                              <TextField
                                 fullWidth
                                 required
                                 id="outlined-required"
                                 inputProps={{ style: styles.fistName }}
                                 label="First Name"
                                 name="fname"
                                 value={eventData.fname}
                                 onChange={handleChange}
                              />
                           </div>
                           <div className="flex flex-col gap-[1rem]">
                              <TextField required id="outlined-required" inputProps={{ style: styles.textField }} label="Last Name" name="lname" value={eventData.lname} onChange={handleChange} />
                              <TextField
                                 required
                                 id="outlined-required"
                                 type="number"
                                 inputProps={{ style: styles.textField }}
                                 label="Mobile Phone"
                                 name="phone"
                                 value={eventData.phone}
                                 onChange={handleChange}
                              />
                              <TextField
                                 required
                                 id="outlined-required"
                                 inputProps={{ style: styles.textField }}
                                 label="Email Address"
                                 helperText="This is the e-mail we will send your confirmation to."
                                 name="email"
                                 type="email"
                                 value={eventData.email}
                                 onChange={handleChange}
                              />
                              <div className={`${styles.headText} flex flex-row mb-4`}>Approximate Budget</div>
                              <div className="justify-center items-center mx-5">
                                 <Slider step={1000} min={100000} max={3000000} getAriaLabel={() => 'Approximate Budget'} value={value} onChange={handleSliderChange} valueLabelDisplay="auto" />
                                 <Typography id="non-linear-slider" gutterBottom>
                                    THB {eventData.min_budget.toLocaleString()}-{eventData.max_budget.toLocaleString()}
                                 </Typography>
                              </div>
                           </div>
                        </div>
                        <div className="flex flex-col w-full sm:w-1/2">
                           <span className={`${styles.headText} flex flex-row mb-4`}>Company Information</span>
                           <div className="flex flex-col gap-[1rem]">
                              <TextField
                                 id="outlined-required"
                                 inputProps={{ style: styles.textField }}
                                 label="Company Name"
                                 name="company"
                                 value={eventData.company}
                                 onChange={handleChange}
                                 required
                              />
                              <TextField id="outlined-required" inputProps={{ style: styles.textField }} label="Country" name="address" value={eventData.address} onChange={handleChange} required />
                              <TextField
                                 type="number"
                                 id="outlined-required"
                                 inputProps={{ style: styles.textField }}
                                 label="ZIP/Postal Code"
                                 name="zip"
                                 value={eventData.zip}
                                 onChange={handleChange}
                                 required
                              />
                              <span className={`${styles.headText} mt-4`}>Additional Details and Preferences</span>
                              <TextField
                                 placeholder="Tell us what you whould like to know or let us know if you have any special requests"
                                 variant="outlined"
                                 rows="5"
                                 multiline
                                 fullWidth
                                 inputProps={{ style: { fontSize: '16px' } }}
                                 name="addition"
                                 value={eventData.addition}
                                 onChange={handleChange}
                              />
                           </div>
                        </div>
                     </div>
                     <div className="flex flex-col justify-center items-center mb-20">
                        <button
                           className={`${styles.button} disabled:bg-primary/40 disabled:border-primary/20 disabled:text-white disabled:cursor-default text-2xl m-[3rem] text-white w-fit bg-secondary hover:bg-white hover:text-secondary border-2 border-secondary transition-all`}
                           type="submit"
                           disabled={!submitCondition}
                        >
                           Submit
                        </button>
                     </div>
                  </form>
               </div>
            </>
         )}
      </div>
   );
};

export default EventDetails;
