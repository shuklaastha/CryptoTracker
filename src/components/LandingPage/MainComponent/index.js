import './style.css'
import React from 'react'
import Button from '../../Common/Button'
import gradient from '../../../assets/gradient.png'
import phone from '../../../assets/phone.png'
import { motion } from "framer-motion";
// import { RWebShare } from "react-web-share";
// import { toast } from "react-toastify";
function MainComponent() {
    return (
        <div className='flex-info'>
            <div  className='left_component'>
            <motion.h1 className='track-crypto-heading'
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            >
                Track Crypto
            </motion.h1>

            <motion.h1 className='real-time-heading'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 1 }}
            >
                Real Time.
            </motion.h1>

            <motion.p className='description'
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Track your favorite crypto currency in real time, please click on Dashboard to do so!
            </motion.p>

            <motion.div className='btn-flex'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25, duration: 0.75 }}
            >
            <a href='/dashboard'>
            <Button text={"Dashboard"}/>
            </a>
            <Button text={'Share'} outlined={true}/>
            </motion.div>
            
            </div>
            <div className='phone-components'>
                <motion.img src={phone} alt="phone" className='phone' 
                          initial={{ y: -10 }}
                          animate={{ y: 10 }}
                          transition={{
                            type: "smooth",
                            repeatType: "mirror",
                            duration: 2,
                            repeat: Infinity,
                          }}
                />
                <img src={gradient} alt="gradient" className='gradient' />
            </div>  
        </div>
    )
}

export default MainComponent