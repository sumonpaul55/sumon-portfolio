import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { HelmetProvider } from 'react-helmet-async'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Authcontext from './shared/contextProvider/Authcontext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// ..
AOS.init({
  duration: 2000,
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Authcontext>
        <RouterProvider router={router}></RouterProvider>
      </Authcontext>
    </HelmetProvider>
    <ToastContainer />
  </React.StrictMode>,
)
