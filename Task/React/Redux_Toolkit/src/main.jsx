import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import ShoppingCart from './Components/ShoppingCart/ShoppingCart.jsx'
import CheckOut from './Components/Payment/CheckOut.jsx'
import Home from './Components/Home/Home.jsx';

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/cart' element={<ShoppingCart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
