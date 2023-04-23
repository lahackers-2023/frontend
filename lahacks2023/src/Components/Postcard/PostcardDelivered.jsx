import React from 'react';
import { useState } from 'react';
import './PostcardDelivered.css'
import { motion } from 'framer-motion'

function PostcardDelivered({ message }) {
  return (
    <motion.div initial={{ x: '0vw', y: '100vh' }}
      animate={{ y: '0vh' }}
      transition={{ transition: 'ease-in-out', duration: "1", delay: "10" }}
      className='postcard-wrapper-delivered'>
      <div className='postcard-back-text-delivered'>
        <p className='postcard-back-text-field-delivered' maxlength="600">
          {message}
        </p>
      </div>
    </motion.div>
  );
}

export default PostcardDelivered;