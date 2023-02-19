import React, { useState, useEffect } from 'react';
import classes from './AuthForm.module.scss';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Layout from '../Layout';
import { motion } from 'framer-motion';

function Register() {
  const [pass, setPass] = useState('');
  const [enable, setEnable] = useState(false);
  const [failPassCheck, setFailPassCheck] = useState(false);

  const registerDB = async (e) => {
    e.preventDefault();

    if( e.target.password.value === e.target.cPassword.value) {
      const user = {
        fullName: e.target.fullName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        username: e.target.username.value
      };
      try {
        await axios.post('/api/auth/register', user);
        toast.success('Register Sucessful')
      } catch(err) {
        console.log(err);
        toast.error(err.message);
      }
    } else {
      toast.error('Passwords Do Not Match');
    }
  };

  const checkPass = (e) => {
    if(e.target.value === pass && e.target.value !== "") {
      toast.success('Password Matched');
      setEnable(true);
      setFailPassCheck(false);
    }
    if (failPassCheck === false && e.target.value !== pass) setFailPassCheck(true);
  }

  return (
    <Layout>
      <div className={classes.register}>
        <div className={classes.nav}>
          <div className={classes.nav_child}>
          <Link to="/auth" >
              <motion.svg className={classes.svg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                <motion.path 
                  initial={{
                    pathLength: 0,
                    opacity: 0,
                    rotate: -180
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    rotate: 180,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 1,
                  }}
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></motion.path> 
                <motion.path 
                   initial={{
                    pathLength: 0,
                    opacity: 0,
                  }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 1.2,
                  }}
                d="M13.26 15.53L9.73999 12L13.26 8.46997" stroke="#d6d6d6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></motion.path> </g></motion.svg>
            </Link>
          </div>
        </div>
  
        <motion.h2 
          className={classes.tagline}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 1.2,
          }}>find peace in simple organizing</motion.h2>
        <motion.h5 
          className={classes.g_todo}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 1.2,
          }}>todo</motion.h5>
        <motion.div 
          className={classes.bubble}
          initial={{
            height: 0,
          }}
          animate={{
            height: 'fit-content',
          }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}>
          <motion.h1 
            className={classes.title}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}>
            sign up
          </motion.h1>
          <motion.form 
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.8,
            }}

            className={classes.authForm}
            onSubmit={registerDB}>
            <label htmlFor='fullName'>
              <input 
                type="text" 
                name="fullName" 
                placeholder='Full Name' 
                required />
            </label>
            <label htmlFor='email'>
              <input 
                type="email" 
                name="email" 
                placeholder='Email' 
                required />
            </label>
            <label htmlFor='username'>
              <input 
                type="text" 
                name="username" 
                placeholder='username' 
                required />
            </label>
            <label htmlFor='password'>
              <input 
                type="text" 
                name="password" 
                placeholder='Password' 
                onChange={e => setPass(e.target.value)}
                required />
            </label>
            <label htmlFor='cPassword'>
              <input 
                type="text" 
                name="cPassword" 
                placeholder='Confirm Password' 
                onChange={checkPass}
                className={classes.cInput}
                required />
              {failPassCheck ? <p className={classes.err}>! passwords not matched</p> : <p></p>}
            </label>
            
            <button type='submit' disabled={!enable}>create account</button>
          </motion.form>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Register


