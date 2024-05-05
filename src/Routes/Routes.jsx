import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import Main from "../layouts/Main";
import AddCoffee from "../pages/addCoffee/AddCoffee";
import EditCoffee from "../pages/EditCoffee/EditCoffee";
import Viewcard from "../pages/Viewcard/Viewcard";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch("https://coffee-server-mu.vercel.app/coffee")
      },
      {
        path:'/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <EditCoffee></EditCoffee>,
        loader: ({params}) => fetch(`https://coffee-server-mu.vercel.app/coffee/${params.id}`)
        
      },
      {
        path: 'view/:id',
        element: <Viewcard></Viewcard>,
        loader: ({params}) => fetch(`https://coffee-server-mu.vercel.app/coffee/${params.id}`)
      }
    ]
  },
]);

export default router;
