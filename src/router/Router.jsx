import React from "react";
import MainLayout from "../layout/MainLayout";
import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/Home";
import Contact from "../contact/Contact";
import Gallery from "../pages/gallery/Gallery";
import SignIn from "../pages/signIn/SignIn";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            }
            ,
            {
                path: "/contact",
                element: <Contact></Contact>
            }
            ,
            {
                path: "/Gellary",
                element: <Gallery></Gallery>
            },
            {
                path: "login",
                element: <SignIn></SignIn>
            }
        ]
    }
])

export default router