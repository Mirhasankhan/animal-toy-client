import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Components/Routes/Routes'
import Provider from './Components/Providers/Provider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </React.StrictMode>,
)
