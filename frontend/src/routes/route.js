import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Add from "../pages/Add"
import AboutUs from "../pages/AboutUs"
import Contacts from "../pages/Contacts";
import Portfolio from "../pages/Portfolio";
import Pricing from "../pages/Pricing";

export const ROUTES = [
    {
        path: "/",
        element: <MainRoot />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "aboutus",
                element: <AboutUs />
            },
            {
                path: "add",
                element: <Add />
            },
            {
                path: "contacts",
                element: <Contacts />
            }
            , {
                path: "portfolio",
                element: <Portfolio />
            }, {
                path: "pricing",
                element: <Pricing />
            }
        ]
    }
]