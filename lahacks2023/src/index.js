import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Landing from './Views/Landing';
import SignUp from './Views/SignUp'
import Home from './Views/Home'
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VerifyUser from './Views/VerifyUser';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Landing/>
    },
    {
      path: "/signup",
      element: <SignUp/>
    },
    {
      path: "/home",
      element: <Home/>
    },
    {
      path: '/verify',
      element: <VerifyUser/>
    }
  ]
);

root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-xmqkw5ngbkkgcxok.us.auth0.com"
    clientId="uX7ATeboD6Q01x05Z9Xvcj5K2FtJA9nH"
    authorizationParams={{
      redirect_uri: "http://localhost:3000/verify"
    }}
  >
  
    <RouterProvider router={router}/>
  
  </Auth0Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
