import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import * as Util from "./utils";
import { Pages } from "./pages";
import { ErrorPage } from "../Pages/Error";

const routes = createBrowserRouter([
    {
        element: <Util.RootLayout />,
        children: [
            {
                path: "/",
                element: <Pages.Splash />,
            },

            {
                path: "Home",
                element: <Pages.Site.Home />,
            },
            {
                path: "LearnMore",
                element: <Pages.Site.LearnMore />,
            },
            {
                path: "Demo",
                element: <Pages.Site.DemoPage />,
            },


            {
                path: "Auth",
                element: <Util.Deslogado />,
                children: [
                    {
                        path: "Login",
                        element: <Pages.Auth.AuthPage />,
                    },
                    {
                        path: "CompanySelection",
                        element: <Pages.Auth.CompanySelection />,
                    },
                ],
            },
            {
                path: "DashBoard",
                element: <Util.Logado />,
                children: [
                    {
                        path: "MyDashboard",
                        element: <Pages.UserDash.UserDashboard />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="Metrics" />,
                            },
                            {
                                path: "Metrics",
                                element: <Pages.UserDash.DashboardUserContent open={true} />,
                            },

                            {
                                path: "Time-Tracking",
                                element: <Pages.UserDash.TimeTracking open={true} />,
                            },
                            {
                                path: "Tasks",
                                element: <Pages.UserDash.TaskOption />,
                            },
                            {
                                path: "Projects",
                                element: <Pages.UserDash.UserProjects />,
                            },
                        ],
                    },
                    {
                        path: "CompanyDashboard",
                        element: <Pages.AdminDash.AdminDashboard />,
                        children: [
                            {
                                index: true,
                                element: <Navigate to="Metrics" />,
                            },
                            {
                                path: "Metrics",
                                element: <Pages.AdminDash.DashboardContent open={true} />,
                            },
                            {
                                path: "Collaborators",
                                element: <Pages.AdminDash.Collaborators open={true} />,
                            },
                            {
                                path: "Projects",
                                element: <Pages.AdminDash.AdminProjects />,
                            },
                            {
                                path: "Settings",
                                element: <Pages.AdminDash.Settings />,
                            },
                            {
                                path: "MenageTask",
                                element: <Pages.AdminDash.MenageTask/>
                            }
                        ],
                    },
                ],
            },
            {
                path: "*",
                element: <ErrorPage/>,
            },
        ]
    },

]);

const Routes = () => {
    return <RouterProvider router={routes} />;
};

export default Routes;
