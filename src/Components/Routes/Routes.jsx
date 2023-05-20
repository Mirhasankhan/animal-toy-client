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
import WrongURL from "../Pages/ErrorRoute/WrongURL";
// import UpdateToy from "../Pages/MyToys/UpdateToy";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <WrongURL></WrongURL>,
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
                loader: ()=>fetch('https://animal-toys-server.vercel.app/allToy')
            },
            {
                path: '/allToys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params})=> fetch(`https://animal-toys-server.vercel.app/allToy/${params.id}`)
            },
            {
                path: '/myToys',
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>              
            },
            // {
            //     path: 'myToys/:id',
            //     element: <UpdateToy></UpdateToy>,
            //     loader: ({params})=> fetch(`https://animal-toys-server.vercel.app/allToy/${params.id}`)
            // }
        ]
    }
]);

export default router;