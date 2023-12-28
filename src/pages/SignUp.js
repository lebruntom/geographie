import React, { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../store/AuthContext";
import SignUpForm from "../components/auth/SignUpForm";
import AuthWrapper from "../components/auth/AuthWrapper";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Navigate to="/" replace />;
  }

  return (
    <AuthWrapper>
      <div>
        <div className="text-blue text-2xl font-bold mb-2">Créer un compte</div>
        <div className="text-black mb-6 text-sm">
          Connectez vous afin de pouvoir enregistrer vos scores et vous comparez
          parmis les autres joueurs
        </div>
        <SignUpForm />
      </div>
      <div className="text-center text-primary text-[12px] mt-2">
        Vous avez déja un compte ?
        <span className="text-blue font-bold">
          <Link to={"/connexion"}> Se connecter</Link>
        </span>
      </div>
    </AuthWrapper>
  );
};

export default SignUp;
