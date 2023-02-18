import React from 'react';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, Router } from 'react-router-dom';
import Home from './pages/Home';
import EditProfile from './pages/EditProfile';
import Auth from './pages/Auth';
import PrivateRoutes from './components/PrivateRoutes';
import Register from './components/auth/Register';
import Login  from './components/auth/Login';

function App() {
  return (
    <React.Fragment>
      <Toaster
        position='top-right'
        toastOptions={{
          style: {
            fontSize: '1.8rem'
          }
        }}>          
      </Toaster>

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/edit-profile" element={<EditProfile />} />
        </Route>
        <Route path='/auth' element={<Auth />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </React.Fragment>
  )
}

export default App;