import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Registration/Login";
import Register from "../Registration/Register";
import Home from "../Pages/Home/Home";
import AddToys from "../Pages/AddToys/AddToys";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: 'addToys',
                element: <AddToys></AddToys>
            }
        ]
    }
]);

export default router;