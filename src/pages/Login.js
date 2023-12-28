import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../store/AuthContext";
import LoginForm from "../components/auth/LoginForm";
import AuthWrapper from "../components/auth/AuthWrapper";
import { Link } from "react-router-dom";

const Login = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthWrapper>
      <div>
        <div className="text-blue text-2xl font-bold mb-2">Connexion</div>
        <div className="text-black mb-6 text-sm">
          Connectez vous afin de pouvoir enregistrer vos scores et vous comparez
          parmis les autres joueurs
        </div>
        <LoginForm />
      </div>
      <div className="text-center text-primary text-[12px] mt-2">
        Vous n'avez pas de compte ?
        <span className="text-blue font-bold">
          <Link to={"/inscription"}> S'inscrire</Link>
        </span>
      </div>
    </AuthWrapper>
  );
};

export default Login;
