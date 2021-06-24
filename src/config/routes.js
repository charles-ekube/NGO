import React from 'react';
import { AboutUs, Contact, Gallery, Home, ProjectDisplay, Projects } from '../pages';


const routes = [
    {
        path : '/',
        component : Home,
    },
    {
        path : '/gallery',
        component : Gallery,
    },
    {
        path : '/contact',
        component : Contact,
    },
    {
        path : '/projects',
        component : Projects,
    },
    {
        path : '/projectsdisplay',
        component : ProjectDisplay,
    }, 
    {
        path : '/about',
        component : AboutUs,
    }

]

export default routes;