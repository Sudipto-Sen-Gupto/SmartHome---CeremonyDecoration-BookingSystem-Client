import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayout from '../../Layout/Homelayout/Homelayout';
import Homepage from '../../pages/homepage/Homepage';
import Service from '../../pages/Service/Service';

import Contact from '../../pages/contact/Contact';
import About from '../../pages/aboutus/About';
import Login from '../../Layout/Authlayout/login/Login';
import Register from '../../Layout/Authlayout/register/Register';
import Authlayout from '../../Layout/Authlayout/Authhome/Authlayout';
import Privateroute from '../PrivateRoute/Privateroute';
import ViewDetails from '../../pages/viewDetails/ViewDetails';
import Dashboard from '../../pages/Dashboard/Dashboard';
import Payment from '../../pages/Dashboard/Payment';
import AdminLayout from '../../pages/Dashboard/AdminLayout';
import Successpayment from '../../pages/Dashboard/Successpayment';
import Cancelpayment from '../../pages/Dashboard/Cancelpayment';
import Decorator from '../../pages/Bedecorator/Decorator';
import Paymenthistory from '../../pages/Dashboard/Paymenthistory';
import Approvedecorator from '../../pages/Dashboard/Approvedecorator';
import Errorpage from '../../pages/errorpage/Errorpage';
// import Approvedecorator from '../../pages/Dashboard/Approvedecorator';


export const router = createBrowserRouter([
    { 
           path:'/',
           Component:Homelayout,
           children:[
            {
                index:true,
                Component:Homepage
            },
            {
                path:'services',
                Component: Service
            },
            {
               path:'viewdetails/:id',
               element:<Privateroute>  <ViewDetails></ViewDetails> </Privateroute>
            },
            {
                path:'decorator',
                element:<Privateroute> <Decorator></Decorator> </Privateroute>
               
            },
            {
                path:'contact',
                Component:Contact
            },
            {
                path:'about',
                Component:About
            }
        ],    

    },
     
    {
            path:'/authlayout',
            Component:Authlayout,
            children:[
                {
                path:'login',
                Component:Login
            },
             
        {
            path:'register',
            Component:Register
        }
        ]
        },
        {
            path:'/dashboard',
            element:  <Privateroute><Dashboard></Dashboard></Privateroute> ,
            children:[{
                path:'payment',
                Component:AdminLayout
                
            },
            {
                  path:'paymenthistory',
                  Component:Paymenthistory
            },
            {
                   path:'approvedecor',
                   Component:Approvedecorator
            },
            {
                path:'success',
                Component:Successpayment
            },
            {
                path:'cancel',
                Component:Cancelpayment

            }
               
        ]
        },
        {
            path:'*',
            Component:Errorpage
        }

])