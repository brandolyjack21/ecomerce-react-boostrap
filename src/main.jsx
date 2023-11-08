import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PageProduct from './components/productsDescription/PageProduct.jsx'
import './index.css'

// redux
import { Provider } from 'react-redux';
import store from './app/store.js';

// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
      
  },
  {
    path:"products/:id",
    element:<PageProduct/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider  router={ router }/>
     {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
