'use client'
// components/Tooltip.js
import React from 'react';
import { motion } from 'framer-motion';

const Tooltip = ({  children }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      style={{
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
      }}
    >
      {children}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        style={{
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: '#fff',
          padding: '8px',
          borderRadius: '4px',
          fontSize: '14px',
          whiteSpace: 'nowrap',
          zIndex: 1,
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      >
      </motion.div>
    </motion.div>
  );
};

export default Tooltip;
