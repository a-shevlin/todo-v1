import React from 'react';
import { Toaster } from 'react-hot-toast';
import AnimatedRoutes from './components/AnimatedRoutes';

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
      <AnimatedRoutes />
    </React.Fragment>
  )
}

export default App;