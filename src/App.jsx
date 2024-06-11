import React from 'react'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'

import {
  createBrowserRouter,
  RouterProvider, Route, redirect } from "react-router-dom";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <FormPage/>,
    },
    {
      path: "list",
      element: <ListPage />
    }
    
  ])
  const App = () => {
    return (
      <div>
        <RouterProvider router={router} />
      </div>
    ) 
  }
  
  
  export default App;