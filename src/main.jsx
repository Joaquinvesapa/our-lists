import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Login from './pages/Login'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter(
//   [
//     {
//       path: "/login",
//       element: <Login/>
//     },
//     {
//       path: "/home",
//       element: <App/>
//     }

//   ]
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
);