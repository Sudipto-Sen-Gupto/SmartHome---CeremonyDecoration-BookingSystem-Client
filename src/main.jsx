import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { router } from './component/Router/router.jsx'
import { RouterProvider } from 'react-router'
import { ToastContainer } from 'react-toastify'
import Authprovider from './component/Authprovider/Authprovider.jsx'
import  { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient=new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>

   <QueryClientProvider client={queryClient}>
             <Authprovider>
                  <RouterProvider router={router}></RouterProvider>
    </Authprovider>
   </QueryClientProvider>
     

      <ToastContainer />
  </StrictMode>,
)
