import React,{ lazy } from 'react';
import {Redirect} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout'
import {FixedSidebar} from "./layouts/FixedSidebar";

import Dashboard from './views/Dashboard';
const routes = [
    {
        path: '/',
        exact: true,
        component: () => <Redirect to="/dashboard"/>
    },
    {
      path: '/auth',
      component: AuthLayout,
      routes: [
          {
              path: '/auth/login',
              exact: true,
              component: lazy(() => import('./views/Login')),
          },
          {
              path: '/auth/register',
              exact: true,
              component: lazy(() => import('./views/Register')),
          },
      ]
    },
    {
        route: '*',
        component: FixedSidebar,
        routes: [
            {
                path: '/dashboard',
                exact: true,
                component: Dashboard,
            }
        ]
    }
];

export default  routes;
