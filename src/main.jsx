import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "../index.css";
import Register from "./Pages/Register.jsx";
import Login from "./Pages/Login.jsx";
import Home from "./Pages/Home.jsx";
import MainLayout from "./layout/MainLayout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path: "home",
        element: <Home />
      },
      {
        
      }

    ]
  }
]);
createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router}/>
  
)
