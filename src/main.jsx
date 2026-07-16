import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, ReactProvider, RouterProvider} from "react-router-dom"
import "../index.css"
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: "/"
  }
])





createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <RouterProvider router={router}/>
  </BrowserRouter>,
)
