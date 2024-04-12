import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import DefaultLayout from '@Layouts/DefaultLayout';
import Home from '@Pages/home/Home';
import Archetypes from '@Pages/Archetypes/Archetypes';

const Routes = () => {
  console.log('path ', window.location.pathname);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <DefaultLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
          index: true,
        },
        {
          path: '/archetypes',
          element: <Archetypes />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
