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
        loader: () => fetch("http://localhost:3000/coffee")
      },
      {
        path:'/addCoffee',
        element: <AddCoffee></AddCoffee>
      },
      {
        path: 'updateCoffee/:id',
        element: <EditCoffee></EditCoffee>,
        loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
        
      },
      {
        path: 'view/:id',
        element: <Viewcard></Viewcard>,
        loader: ({params}) => fetch(`http://localhost:3000/coffee/${params.id}`)
      }
    ]
  },
]);

export default router;
