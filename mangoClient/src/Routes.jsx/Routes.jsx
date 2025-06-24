import { createBrowserRouter } from "react-router";
import Homepage from "../Components/Homepage/Homepage";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Home from "../Components/Home/Home";
import NotFound from "../Components/NotFound/NotFound";
import AddPlant from "../Components/AddPlant.jsx/AddPlant";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyPlants from "../Components/myPlants/MyPlants";
import AllPlants from "../Components/AllPlants/AllPlants";
import PlantDetails from "../Components/PlantDetails/PlantDetails";
import Update from "../Components/Update/Update";
import Loader from "../Components/Loader/Loader";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Homepage></Homepage>,
        children: 
        [
            {
                index: true,
                Component: Home
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/add',
                element: <PrivateRoute><AddPlant></AddPlant></PrivateRoute>
            },
            {
                path: '/myPlants',
                element: <PrivateRoute><MyPlants></MyPlants></PrivateRoute>,
                loader: ()=> fetch('https://mango-server-taupe.vercel.app/plants'),
                HydrateFallback: Loader
            },
            {
                path: '/allPlants',
                element: <AllPlants></AllPlants>,
                loader: ()=> fetch('https://mango-server-taupe.vercel.app/plants'),
                HydrateFallback: Loader
            },
            {
                path: '/allPlants/:_id',
                element: <PrivateRoute><PlantDetails></PlantDetails></PrivateRoute>,
                loader: ()=> fetch('https://mango-server-taupe.vercel.app/plants'),
                HydrateFallback: Loader
            },
            {
                path: '/myPlants/:_id',
                element: <Update></Update>,
                loader: ()=> fetch('https://mango-server-taupe.vercel.app/plants'),
                HydrateFallback: Loader
            }
        ]
    },
    {
        path: "*",
        Component: NotFound
    }
])

export default Routes;