import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import styles from './styles.js';
import { events } from '../../constants/text.js';
import { bookingUrl } from '../../constants/pathUrl.js';
import Box from '@mui/material/Box';
import { Slider, TextField } from '@mui/material';
import Typography from '@mui/material/Typography';

function valueText(value) {
   return ` ${value} THB`;
}

const EventDetails = ({ setNavbarBg }) => {
   const { id } = useParams();
   const event = events.filter(({ _id }) => _id === id)[0];

   const handleSubmit = () => {
      return;
   };

   useEffect(() => {
      setNavbarBg('');
      window.scrollTo(0, 0);
   }, [id]);

   const [value, setValue] = React.useState([907231, 2877784]);

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   return (
      <div>
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
         <div className="flex flex-col flex-wrap text-center mt-20 text-5xl font-bold">{event.subject}</div>
         <div className="flex flex-row flex-wrap justify-center items-center">
            <div className="w-5/12">
               <div className="mt-20 text-4xl font-bold">{event.inner}</div>
               <div className="text-xl py-10">{event.fidata}</div>
               <img src={event.dataImg} alt="chandra events" className="ss:w-[800px] w-11/12 ss:h-[600px] h-[400px] object-cover rounded-xl" />
               <div className="text-xl py-10">{event.sedata}</div>
            </div>
            <div className="mt-20">
               {event.otherImg?.map((img, index) => (
                  <img src={img} key={index} alt="chandra events" className="ss:w-[700px] w-11/12 ss:h-[500px] h-[450px] object-cover rounded-xl ss:mx-5 mx-0 my-5 " />
               ))}
            </div>
         </div>
         <div className="w-full mt-[10rem] mb-[4rem] text-center text-4xl font-bold">Request for a Proposal</div>
         <div className="flex flex-row flex-wrap justify-center items-center ">
            <form className="flex flex-col justify-start gap-4 px-[20px]" onSubmit={handleSubmit}>
               <div className="flex flex-wrap justify-center ">
                  <div className="pr-10">
                     <span className={`${styles.headText} flex flex-row mb-4`}>Contact Info</span>
                     <div className="flex mb-[1rem]">
                        <TextField required id="outlined-required" inputProps={{ style: styles.prefix }} label="Prefix" />
                        <TextField required id="outlined-required" inputProps={{ style: styles.fistName }} label="Frist Name" />
                     </div>
                     <div className="flex flex-col gap-[1rem]">
                        <TextField required id="outlined-required" inputProps={{ style: styles.textField }} label="Last Name" />
                        <TextField required id="outlined-required" inputProps={{ style: styles.textField }} label="Mobile Phone" />
                        <TextField required id="outlined-required" inputProps={{ style: styles.textField }} label="Decision By" />
                        <TextField required id="outlined-required" inputProps={{ style: styles.textField }} label="Email Address" helperText="This is the Email we will send your confirmation to." />
                        <span className={`${styles.headText} flex flex-row mb-4`}>Approximate Budget min</span>
                        <div className="justify-center items-center">
                           <Box sx={{ width: 500 }}>
                              <Slider
                                 min={100000}
                                 max={3000000}
                                 getAriaLabel={() => 'Approximate Budget min'}
                                 value={value}
                                 onChange={handleChange}
                                 valueLabelDisplay="auto"
                                 getAriaValueText={valueText}
                              />
                              <Typography id="non-linear-slider" gutterBottom>
                                 {valueText(value)}
                              </Typography>
                           </Box>
                        </div>
                     </div>
                  </div>
                  <div className="flex flex-row">
                     <div>
                        <span className={`${styles.headText} flex flex-row`}>Company Information</span>
                        <Box
                           component="form"
                           sx={{
                              '& .MuiTextField-root': {
                                 mt: 2,
                                 display: 'flex',
                                 flexWrap: 'wrap',
                              },
                           }}
                           noValidate
                           autoComplete="off"
                        >
                           <div className="flex flex-col">
                              <TextField id="outlined-required" inputProps={{ style: styles.textField }} label="Company Name" />
                              <TextField id="outlined-required" inputProps={{ style: styles.textField }} label="Country" />
                              <TextField id="outlined-required" inputProps={{ style: styles.textField }} label="ZIP/Pstal Code" />
                              <span className={`${styles.headText} mt-4`}>Additional Details and Preferences</span>
                              <TextField
                                 placeholder="Tell us what you whould like to know or let us know if you have any special requests"
                                 variant="outlined"
                                 rows="5"
                                 required
                                 multiline
                                 fullWidth
                                 inputProps={{ style: { fontSize: '16px' } }}
                              />
                           </div>
                        </Box>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col justify-center items-center">
                  <button
                     className={`${styles.button} text-2xl m-[3rem] text-white w-fit bg-secondary text-shadow-xl hover:text-shadow-none hover:bg-white hover:text-secondary border-2 border-secondary`}
                     type="submit"
                  >
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default EventDetails;
