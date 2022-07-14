import { Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Water from "../pages/Water"
import City from "../pages/Water/City"
import All from "../pages/Water/All"
import Headercity from "../pages/Water/Headercity"


export default [
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/water',
        element: <Water />,
        children: [
            {
                path: 'city',
                element: <City />,
            },
            {
                path: 'all',
                element: <All />
            },
            {
                path: 'headercity',
                element:<Headercity />
            },
            {
                path: '/water',
                element: <Navigate to="water/city/all" />
            }
        ]
    },
    {
        path: '/',
        element: <Navigate to="/login" />
    }
]