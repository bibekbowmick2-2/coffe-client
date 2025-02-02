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
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path: "/coffeedetails/:id",
        element: <CoffeeDetails/>,
        loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path:"/signin",
        element:<SignIn></SignIn>
      },
      {
        path:"/signup",
        element:<Signup></Signup>
      },

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
