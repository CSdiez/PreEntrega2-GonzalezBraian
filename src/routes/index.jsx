import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../components/Root";
import ItemDetailContainer from "../components/containers/ItemDetailContainer";
import ItemListContainer from "../components/containers/ItemListContainer";
import NavBar from "../components/NavBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <> <NavBar/> <h1>Not found</h1></>,
        children: [
            {
                path: "/",
                element: <ItemListContainer />,
            },
            {
                path: "/category/:categoryId",
                element: <ItemListContainer />,
            },
            {
                path: "/detail/:name",
                element: <ItemDetailContainer/>,
            },
        ],
    },
]);

const Router = () => {
    return <RouterProvider router={router} />;
};

export default Router;
