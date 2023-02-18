import React from 'react';
import classes from './AuthForm.module.scss';

function Login() {
  return (
    <div className={classes.login}>
      <h2 className={classes.tagline}>find peace in simple organizing</h2>
      <h5 className={classes.g_todo}>todo</h5>
      <div className={classes.bubble}>
        <h1 className={classes.title}>
          login
        </h1>
        <form className={classes.authForm}>
          <label htmlFor='username'>
            <input type="text" name="username" placeholder='username' required />
          </label>
          <label htmlFor='password'>
            <input type="password" name="password" placeholder='Password' required />
          </label>
            <button type='submit'>login</button>
        </form>
      </div>
    </div>
  )
}

export default Login;