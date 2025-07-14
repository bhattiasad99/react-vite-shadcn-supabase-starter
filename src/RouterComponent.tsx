import { createBrowserRouter, Navigate, Outlet, RouterProvider, useLocation } from "react-router";
// import Login from "./pages/Login";
import type { FC } from "react";
import Login from "./pages/Login";
import { useAuth } from "./components/context/AuthProvider";
import BaseLayout from "./components/use-case/BaseLayout";
import { PAGES } from "./utils/constants";

const ProtectedRoute: FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
    const location = useLocation()

    if (!isAuthenticated) {
        // Redirect to login, preserving the location the user tried to visit
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    return <BaseLayout>
        <Outlet />
    </BaseLayout>
}

const RootRedirect: FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
    const location = useLocation()
    return isAuthenticated
        ? <Navigate to="/projects" state={{ from: location }} replace />
        : <Navigate to="/login" state={{ from: location }} replace />
}

const LoginRelocate: FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
    const location = useLocation();
    if (isAuthenticated) {
        return <Navigate to="/" state={{ from: location }} replace />
    }

    return <Login />
}

const router = (isAuthenticated: boolean) => createBrowserRouter([
    {
        path: "/",
        element: <RootRedirect isAuthenticated={isAuthenticated} />, // ✅ now dynamic and avoids infinite loop
    },
    {
        path: "/login",
        element: <LoginRelocate isAuthenticated={isAuthenticated} />,
    },

    {
        element: <ProtectedRoute isAuthenticated={isAuthenticated} />,
        children: PAGES.map(eachPage => {
            return {
                path: eachPage.path,
                element: eachPage.element
            }
        }),
    },
])

const RouterComponent = () => {
    const auth = useAuth();
    return <RouterProvider router={router(auth.isAuthenticated)} />
}

export default RouterComponent