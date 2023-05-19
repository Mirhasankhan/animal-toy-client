import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Registration/Login";
import Register from "../Registration/Register";
import Home from "../Pages/Home/Home";
import AddToys from "../Pages/AddToys/AddToys";
import AllToys from "../Pages/AllToys/AllToys";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys/MyToys";

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
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: '/allToys',
                element: <AllToys></AllToys>,
                loader: ()=>fetch('http://localhost:5000/addToy')
            },
            {
                path: '/allToys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/addToy/${params.id}`)
            },
            {
                path: '/myToys',
                element: <MyToys></MyToys>
            }
        ]
    }
]);

export default router;