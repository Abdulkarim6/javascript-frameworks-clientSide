import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import CategoryDetails from "../pages/categoryDetails/CategoryDetails";
import CheckOut from "../pages/CheckOut/CheckOut";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

export const routes = createBrowserRouter([
    {
        path: '/', element: <Main></Main>,
        children: [
            {
                path: '/', element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/details')
            },
            {
                path: '/category/:id', element: <CategoryDetails></CategoryDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            { path: '/login', element: <Login></Login> },
            { path: '/register', element: <Register></Register> },
            {
                path: '/details/:id', element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`)
            }
        ]
    },
    {
        path: '*',
        element: <div>
          <h1 className='text-2xl font-bold text-center'>Oops! Sorry, This page not found 404</h1>
        </div>
      }
])
