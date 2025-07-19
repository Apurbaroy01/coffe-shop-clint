import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import BuyCoffee from './Components/HomePage/BuyCoffee';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
  },
  {
    path: "/buyCoffee/:id",
    loader:({params})=>fetch(`https://cofee-store-server-neon.vercel.app/coffee/${params.id}`),
    element: <BuyCoffee></BuyCoffee>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
