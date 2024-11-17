import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// Import the layouts
import RootLayout from './layouts/root-layout'
import DashboardLayout from './layouts/DashboardLayout'
// Import the components
import IndexPage from './App'
import ContactPage from './pages/contact'
import SignInPage from './pages/sign-in'
import SignUpPage from './pages/sign-up'
import DashboardPage from './pages/dashboard'
import  Roles from './pages/roleselect'
import Roleselect from './pages/roleselect'
import Admin from './pages/Admin/Admindashboard'
import User from './pages/User/User'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <IndexPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/sign-in/*', element: <SignInPage /> },
      { path: '/sign-up/*', element: <SignUpPage /> },
      {path:'/admin', element: <Admin/>},
      {path:'/user', element: <User/>},
      {path:'/after-signin', element: <Roleselect/>
      

      },
      {
        element: <DashboardLayout />,
        path: 'dashboard',
        children: [
          { path: '/dashboard', element: <DashboardPage /> },
          
        ],
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)