import React from 'react';
import classes from './AuthForm.module.scss';
import { Link  } from "react-router-dom";
import Layout from '../Layout';
import { motion } from 'framer-motion';

function Login() {
  return (
    <Layout>
      <div className={classes.login}>
        <div className={classes.nav}>
          <div className={classes.nav_child}>
            <Link to="/auth" >
              <motion.svg className={classes.svg} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier">
                  <motion.path 
                    initial={{
                      pathLength: 0,
                      opacity: 0,
                      rotate: 0
                    }}
                    animate={{
                      pathLength: 1.5,
                      opacity: 1,
                      rotate: 135,
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
                      pathLength: 1.5,
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
          }}
          >find peace in simple organizing</motion.h2>
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
              delay: 0.6,
              duration: 1,
            }}>
            login
          </motion.h1>
          <motion.form 
            className={classes.authForm}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}>
            <label htmlFor='username'>
              <input type="text" name="username" placeholder='username' required />
            </label>
            <label htmlFor='password'>
              <input type="password" name="password" placeholder='Password' required />
            </label>
              <button type='submit'>login</button>
          </motion.form>
        </motion.div>
      </div>
    </Layout>
  )
}

export default Login;