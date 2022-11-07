import React, { useState } from 'react'
import { TextField, MenuItem, Checkbox, FormControlLabel } from '@mui/material'

import { prefix, policies } from '../../../constants/text.js';
import styles from './styles.js';

const Payment = ({ bookingData }) => {
    const [formData, setFormData] = useState({ 
        prefix: '',
        firstName: '',
        lastName: '',
        phone: '', 
        email: '', 
        address: '', 
        addition: '',
        payment: '' 
    });
    const [agree, setAgree] = useState(false);

    const handleSubmit = () => {

    }

    const handleCheck = (e) => {
        setAgree(e.target.checked)
    }

    const handleChange = (e) => {
        if(e.target.name === 'addition'){
            if(e.target.value.length <= 400){
                setFormData({ ...formData, [e.target.name]: e.target.value })
            }
        }else if(e.target.name === 'phone'){
            if(e.target.value.length <= 10){
                setFormData({ ...formData, [e.target.name]: e.target.value })
            }
        }else{
            if(e.target.value.length <= 200){
                setFormData({ ...formData, [e.target.name]: e.target.value })
            }
        }
    }

    return (
        <form autoComplete='off' noValidate className="lg:w-2/3 xl:mr-28 lg:mr-7 w-full border-[1px] rounded-xl px-14 py-10" onSubmit={handleSubmit}>
            <div className='mb-4'>
                <div className={styles.headText}>Contact Info</div>
                <div>
                    <div className={styles.row}>
                        <div className={`flex ${styles.firstHalf}`}>
                            <div className='w-[120px]'>
                                <TextField
                                    select
                                    name="prefix"
                                    label="Prefix"
                                    value={formData.prefix}
                                    onChange={handleChange}
                                    fullWidth
                                    required
                                    >
                                    {prefix.map((p) => (
                                        <MenuItem key={p.value} value={p.value}>{p.label}</MenuItem>
                                    ))}
                                </TextField>
                            </div>
                            <div className='w-full'><TextField name="firstName" label="First Name" fullWidth value={formData.firstName} onChange={handleChange} required /></div>
                        </div>
                        <div className={styles.half}>
                            <TextField name="lastName" label="Last Name" fullWidth value={formData.lastName} onChange={handleChange} required />
                        </div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.firstHalf}>
                            <TextField name="phone" label="Phone Number" type="tel" fullWidth value={formData.phone} onChange={handleChange} required />
                        </div>
                        <div className={styles.half}>
                            <TextField name="email" label="Email Address" type="email" fullWidth value={formData.email} onChange={handleChange} required helperText="This is the Email we will send your confirmation to." />
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-8'>
                <div className={styles.headText}>Address</div>
                <div className={styles.half}>
                    <TextField name="address" label="Address" fullWidth value={formData.address} onChange={handleChange} required />
                </div>
            </div>
            <div className='mb-4'>
                <div className={styles.headText}>Additional Details and Preferences</div>
                <TextField name="addition" multiline rows={4} placeholder='Please note your requests or special needs' fullWidth value={formData.addition} onChange={handleChange} />
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
                <FormControlLabel sx={{ color: '#484848'}} control={<Checkbox color='secondary' disableRipple size='small' onChange={handleCheck} />} label="I agree with the Policies and Privacy Terms" />
                <div className='text-md text-primary mb-2'>By completing this booking, I agree with the Booking Conditions.</div>
            </div>
        </form>
    )
}

export default Payment