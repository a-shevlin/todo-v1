import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../pages/Home';
import EditProfile from '../pages/EditProfile';
import Auth  from '../pages/Auth';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import PrivateRoutes from './PrivateRoutes';

import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes