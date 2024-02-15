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

const router = createBrowserRouter([
  {element:<HomeLayout /> , path: '/' , errorElement:<ErrorBoundary />},
  {element:<DashbordLayout /> , path: 'dashbord' , errorElement:<ErrorBoundary />},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <YourContextProvider>
    <RouterProvider router={router} />
    </YourContextProvider>
  </React.StrictMode>,
)