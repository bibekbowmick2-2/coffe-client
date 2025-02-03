import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import Home from './components/Home/Home';
import { ApiProvider } from './components/ContextApi';
import CoffeeDetails from './components/Home/CoffeeDetails/CoffeeDetails';
import SignIn from './components/SignIn_SignUp/SignIn';
import Signup from './components/SignIn_SignUp/Signup';
import User from './components/Users/User';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addcoffee",
        element: <AddCoffee />
      },
      {
        path: "/updatecoffee/:id",
        element: <UpdateCoffee />,
        loader: ({params}) => fetch(`https://coffee-store-server-8n1t8cdjy-syeda-fairooz-nawals-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path: "/coffeedetails/:id",
        element: <CoffeeDetails/>,
        loader: ({params}) => fetch(`https://coffee-store-server-8n1t8cdjy-syeda-fairooz-nawals-projects.vercel.app/coffee/${params.id}`)
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },
      {
        path:"/users",
        element:<User></User>,
        loader: () => fetch('https://coffee-store-server-8n1t8cdjy-syeda-fairooz-nawals-projects.vercel.app/users')
      }

    ]
  },
]);


createRoot(document.getElementById('root')).render(

  <StrictMode>
    <ApiProvider>
      <RouterProvider router={router} />
    </ApiProvider>
  </StrictMode>

)
