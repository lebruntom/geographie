import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
const Layout = () => {
  const location = useLocation();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const pathnameWithoutNavBar = [
    "/regions/find",
    "/departements/find",
    "/connexion",
    "/inscription",
    "/",
  ];

  return (
    <div className="bg-background">
      {!pathnameWithoutNavBar.includes(location.pathname) && <Navbar />}

      {/* An <Outlet> renders whatever child route is currently active,
      so you can think about this <Outlet> as a placeholder for
      the child routes we defined above. */}

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
