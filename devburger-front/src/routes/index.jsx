import { createBrowserRouter } from "react-router-dom"

import { Login } from '../containers/Login/index.jsx'
import { Register } from '../containers/Register/index.jsx'
import { Home } from '../containers/Home/index.jsx'

export const router  = createBrowserRouter([
    {
        path: '/login',
        element: < Login />
    },
    {
        path: '/cadastro',
        element: <Register/>
    },
    {
        path: '/',
        element: <Home/>
    }
])