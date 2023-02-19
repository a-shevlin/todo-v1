import React from 'react';
import classes from './Layout.module.scss';
import { motion } from 'framer-motion';

function Layout({ children }) {
  return (
    <motion.main 
      className={classes.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}>
        {children}
    </motion.main>
  )
}

export default Layout