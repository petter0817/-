import { Navigate } from "react-router-dom"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Water from "../pages/Water"
import Kaohsiung from "../pages/Water/kaohsiung"
import Taipei from "../pages/Water/taipei"
import Taichung from "../pages/Water/taichung"


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
                path: 'kaohsiung',
                element: <Kaohsiung />
            },
            {
                path: 'taipei',
                element: <Taipei />
            },
            {
                path: 'taichung',
                element: <Taichung />
            },

            {
                path: '/water',
                element: <Navigate to="/water/taipei" />
            },
        ]
    },
    {
        path: '/',
        element: <Navigate to="/login" />
    }
]