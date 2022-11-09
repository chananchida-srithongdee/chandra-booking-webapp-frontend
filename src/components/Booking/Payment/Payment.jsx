import React, { useEffect, useState } from 'react'
import { TextField, MenuItem, Checkbox, FormControlLabel } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { prefix, policies } from '../../../constants/text.js';
import styles from './styles.js';

const Payment = ({ bookingData, setBookingData }) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const { fname, lname, email, phone, address, addition } = bookingData
    const [agree, setAgree] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [seconds, setSeconds] = useState(60);
    const [timeActive, setTimeActive] = useState(false);

    const handleInvalidEmail = () =>{
        setInvalidEmail(true)
        setTimeout(() => {
            setInvalidEmail(false)
        }, 6000)
    }

    const reset = () => {
        setSeconds(60);
        setTimeActive(false);
    }

    const handleSendEmail = () => {
        if(emailRegex.test(email)){
            console.log('hi');
            //dispatch(getVerifyEmail(email))

            setTimeActive(true)
        }else{
            handleInvalidEmail();
        }
    }

    useEffect(() => {
        let interval = null;
        if(timeActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1)
            }, 1000);
        } else if(seconds <= 0){
            reset();
        }
        return () => clearInterval(interval);
    }, [timeActive, seconds])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleEditStay = () => {
        setBookingData({ ...bookingData, breakfast: null, roomType: { title: '', price: 0 }})
    }

    const handleChange = (e) => {
        if(e.target.name === 'addition'){
            if(e.target.value.length <= 400){
                setBookingData({ ...bookingData, [e.target.name]: e.target.value })
            }
        }else if(e.target.name === 'phone'){
            if(e.target.value.replace(/[0-9]*/, "") === "" && e.target.value.length <= 10){
                setBookingData({ ...bookingData, [e.target.name]: e.target.value })
            }
        }else{
            if(e.target.value.length <= 200){
                setBookingData({ ...bookingData, [e.target.name]: e.target.value })
            }
        }
    }

    return (
        <form autoComplete='off' noValidate className="border-[1px] rounded-xl ss:px-14 xs:px-8 px-4 py-10 lg:w-2/3 w-full" onSubmit={handleSubmit}>
            <div onClick={handleEditStay} className={`${styles.flexCenter} border border-primary/30 caret-transparent mb-8 text-xl text-primary w-[180px] h-[50px] rounded-xl cursor-pointer hover:bg-primary/10 `}><ArrowBackIosNewIcon fontSize='small' />&nbsp;Edit Your Stay</div>
            <div className='mb-4'>
                <div className={styles.headText}>Contact Info</div>
                <div className='w-full flex flex-col'>
                    <div className={styles.row}>
                        <div className={`flex ${styles.firstHalf}`}>
                            <div className='w-[120px]'>
                                <TextField
                                    select
                                    name="prefix"
                                    label="Prefix"
                                    value={bookingData.prefix}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    >
                                    {prefix.map((p) => (
                                        <MenuItem key={p.value} value={p.value}>{p.label}</MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='w-full'><TextField name="fname" label="First Name" fullWidth value={fname} onChange={handleChange} required /></div>
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
                            <TextField name="email" label="Email Address" type="email" error={invalidEmail}  fullWidth value={email} onChange={handleChange} required helperText="This is the Email we will send your confirmation to." />
                        </div>
                    </div>
                    <button onClick={handleSendEmail} disabled={timeActive} className='disabled:bg-primary/50 bg-secondary text-white text-xl rounded-xl px-5 py-2 w-fit self-end mt-3 hover:bg-primary transition-all'>
                        Send Verification Email&nbsp;{timeActive && `(${seconds})`}
                    </button>
                </div>
            </div>
            <div className='mb-8'>
                <div className={styles.headText}>Address</div>
                <div className={styles.half}>
                    <TextField name="address" label="Address" fullWidth value={address} onChange={handleChange} required />
                </div>
            </div>
            <div className='mb-4'>
                <div className={styles.headText}>Additional Details and Preferences</div>
                <TextField name="addition" multiline rows={4} placeholder='Please note your requests or special needs' fullWidth value={addition} onChange={handleChange} />
            </div>
            <div className='mb-4'>
                <div className={styles.headText}>Payment Information</div>
            </div>
            <div className='mb-4'>
                <div className={`${styles.headText} mb-2`}>Policies</div>
                <div className='text-md text-primary mb-2'>Please read the following policies.</div>
                <ul className='text-md text-primary list-disc ml-6'>
                    {policies.map((policy, index) => (
                        <li key={index}>{policy}</li>
                    ))}
                </ul>
            </div>
            <div className='mb-4'>
                <div className={`${styles.headText} mb-2`}>Acknowledge</div>
                <FormControlLabel sx={{ color: '#484848'}} control={<Checkbox color='secondary' disableRipple size='small' onChange={(e) => setAgree(e.target.checked)} />} label="I agree with the Policies and Privacy Terms" />
                <div className='text-md text-primary mb-2'>By completing this booking, I agree with the Booking Conditions.</div>
            </div>
        </form>
    )
}

export default Payment