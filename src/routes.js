import React,{ lazy } from 'react';
import {Redirect} from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout'
import {FixedSidebar} from "./layouts/FixedSidebar";

import Dashboard from './views/Dashboard';
import ErrorLayout from "./layouts/ErrorLayout";
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
          {
              component: () => <Redirect to="/errors/error-404" />
          }
      ]
    },
    {
        path: '/errors',
        component: ErrorLayout,
        routes: [
            {
                path: '/errors/error-401',
                exact: true,
                component: lazy(() => import('./views/E401'))
            },
            {
                path: '/errors/error-404',
                exact: true,
                component: lazy(() => import('./views/E404'))
            },
            {
                path: '/errors/error-500',
                exact: true,
                component: lazy(() => import('./views/E500'))
            },
            {
                component: () => <Redirect to="/errors/error-404" />
            }
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
            },
            {
                component: () => <Redirect to="/errors/error-404" />
            }
        ]
    }
];

export default  routes;
