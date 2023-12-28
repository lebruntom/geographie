import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Departments from "./pages/Departments";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Regions from "./pages/Regions";
import Scores from "./pages/Scores";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useContext } from "react";
import { AuthContext } from "./store/AuthContext";
import Account from "./pages/Account";
import FindRegions from "./pages/FindRegions";
import FindDepartments from "./pages/FindDepartments";

const ProtectedRoute = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return <Navigate to="/connexion" replace />;
  }

  return <Outlet />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<SignUp />} />
        <Route index element={<Home />} />
        <Route path="/departements">
          <Route index element={<Departments />} />
          <Route path="find" element={<FindDepartments />} />
        </Route>

        <Route path="/regions">
          <Route index element={<Regions />} />
          <Route path="find" element={<FindRegions />} />
        </Route>
        <Route path="scores" element={<Scores />} />

        <Route element={<ProtectedRoute />}>
          <Route path="compte" element={<Account />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
