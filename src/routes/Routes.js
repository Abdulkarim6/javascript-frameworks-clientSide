import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Register from "../pages/register/Register";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            { path: '/', element: <Home></Home> },
            { path: '/register', element: <Register></Register>},
        ]
    }
])
