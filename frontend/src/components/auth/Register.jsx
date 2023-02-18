import React, { useState } from 'react';
import classes from './AuthForm.module.scss';
import axios from 'axios';
import { toast } from 'react-hot-toast';

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

  // useEffect(() => {



  // }, []);



  return (
    <div className={classes.register}>
      <h2 className={classes.tagline}>find peace in simple organizing</h2>
      <h5 className={classes.g_todo}>todo</h5>
      <div className={classes.bubble}>
        <h1 className={classes.title}>
          sign up
        </h1>
        <form 
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
        </form>
      </div>
    </div>
  )
}

export default Register


