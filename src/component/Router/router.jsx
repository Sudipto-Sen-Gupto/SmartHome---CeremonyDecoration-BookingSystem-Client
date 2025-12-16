import React from 'react';
import { createBrowserRouter } from 'react-router';
import Homelayout from '../../Layout/Homelayout/Homelayout';
import Homepage from '../../pages/homepage/Homepage';
import Service from '../../pages/Service/Service';
import Coverage from '../../pages/Coverage/Coverage';
import Contact from '../../pages/contact/Contact';
import About from '../../pages/aboutus/About';
import Login from '../../Layout/Authlayout/login/Login';
import Register from '../../Layout/Authlayout/register/Register';
import Authlayout from '../../Layout/Authlayout/Authhome/Authlayout';

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
                Component:Service
            },
            {
                path:'coverage',
                Component:Coverage
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
        }

])