import React from 'react'
import Layout from '../components/Layout';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';
import classes from '../pages/Auth.module.scss';
import { Link } from 'react-router-dom';

function Auth() {
  return (
    <Layout>
      <div className={classes.form_container}>
        <h1>todo</h1>
        <div className={classes.todo_guy}></div>
        <div className={classes.btn_group} >

          <Link to={'/login'} >
            <div className={classes.btn}>
              login
            </div>
          </Link>
          <Link to={'/register'}>
            <div className={classes.btn}>
              create account
            </div>
            </Link>
        </div>
      </div>
    </Layout>
  )
}

export default Auth;