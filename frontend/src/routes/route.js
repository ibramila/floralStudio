import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Dashboard from "../pages/Dashboard";
import Add from "../pages/Add"

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
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "add",
                element: <Add />
            }
        ]
    }
]