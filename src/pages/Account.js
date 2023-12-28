import React, { useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getUserInfo, setUserScore } from "../api/user";
import { AuthContext } from "../store/AuthContext";
import ChangePseudo from "../components/ChangePseudo";
import Button from "../components/ui/Button";
import PersonnalInformation from "../components/account/PersonnalInformation";
import Title from "../components/account/Title";

const Account = () => {
  const navigate = useNavigate();
  const [userInfos, setUserInfos] = useState({});
  const { currentUser } = useContext(AuthContext);

  const LogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUserInfo(currentUser.email).then((infos) => setUserInfos(infos));
  }, []);

  const test = () => {
    setUserScore(currentUser.email, "departement", 20, 81);
  };
  return (
    <div className="flex p-[50px]">
      <div className="w-1/2 mr-5">
        <Title title={"Statistiques"} />

        <div className="font-bold justify-center flex mt-12 mb-8">Régions</div>
        <div className="flex justify-start">
          <div className="bg-yellow w-[150px] h-[150px] rounded-xl">d</div>
          <div className="bg-yellow w-[150px] h-[150px] rounded-xl mx-8">d</div>
          <div className="bg-orange w-[150px] h-[150px] rounded-xl">d</div>
        </div>
        <div className="font-bold justify-center flex mt-12 mb-8">
          Départements
        </div>
        <div className="flex justify-start">
          <div className="bg-yellow w-[150px] h-[150px] rounded-xl">d</div>
          <div className="bg-yellow w-[150px] h-[150px] rounded-xl mx-8">d</div>
          <div className="bg-orange w-[150px] h-[150px] rounded-xl">d</div>
        </div>
      </div>
      <div className="h-50 w-[2px] bg-gray opacity-[0.2]"></div>
      <div className="w-1/2 pl-5">
        <Title title={"Mes informations"} />

        {userInfos.pseudo && <ChangePseudo userPseudo={userInfos.pseudo} />}
        <div className="flex items-center justify-center mt-12">
          <div className="m-w-[500px]">
            <Button onClick={LogOut}>Se deconnecter</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
