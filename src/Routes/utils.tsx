import { Navigate, Outlet, useLocation } from "react-router"
import ScrollToTop from "../Hook/Scroll";

export const Logado = () => {
  const { pathname, search } = useLocation();
  const isAuthenticated = true; // simulação

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/Auth"
        state={{ from: `${pathname || "/"}${search || ""}` }}
      />
    );
  }

  return <Outlet />;
};

export const Deslogado = () => {
    // const { state } = useLocation()
    return <Outlet />
}

export const Colaborador = () => {
    return <Outlet />
}

export const Admin = () => {
    return <Outlet />
}

export const RootLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}