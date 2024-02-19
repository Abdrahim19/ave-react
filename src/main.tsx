import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layout/HomeLayout';
import ErrorBoundary from './components/commen/pages/ErrorBoundary';
import DashbordLayout from './layout/DashbordLayout';
// import bootstrap files
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

// import adtional css files
import 'animate.css';
import './index.css';
import { YourContextProvider } from './context/MultiStepForm';
import DetailsDemandeLayout from './layout/DetailsDemandeLayout';
import ProfileLayout from './layout/ProfileLayout';
import OfferLayout from './layout/OfferLayout';

const router = createBrowserRouter([
  {element:<HomeLayout /> , path: '/' , errorElement:<ErrorBoundary />},
  {element:<DashbordLayout /> , path: 'dashbord' , errorElement:<ErrorBoundary />},
  {element:<DetailsDemandeLayout /> , path: 'DetailsDemand' , errorElement:<ErrorBoundary />},
  {element:<ProfileLayout /> , path: 'profile' , errorElement:<ErrorBoundary />},
  {element:<OfferLayout /> , path: 'offreurs' , errorElement:<ErrorBoundary />},

])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <YourContextProvider>
    <RouterProvider router={router} />
    </YourContextProvider>
  </React.StrictMode>,
)