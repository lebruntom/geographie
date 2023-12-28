import React, { useContext, useEffect, useState } from "react";
import FranceMap from "../components/FranceMap";
import Dashboard from "../components/Dashboard";
import { departementsData } from "../utils/data/departements";
import Modal from "../components/Modal";
import useTimer from "../hooks/useTimer";
import { calculateSuccessPercentage } from "../utils/game";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ui/ProgressBar";
import { setUserScore } from "../api/user";
import { AuthContext } from "../store/AuthContext";
import ExitButton from "../components/ExitButton";

const FindDepartments = () => {
  const allDepartments = [
    ...departementsData.features.map((department) => department.properties),
  ];

  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(true);
  const { time, startTimer, stopTimer, resetTimer, timeInSec } = useTimer();
  const [openModalExit, setOpenModalExit] = useState(false);

  const restartGame = () => {
    resetTimer();
    setClickedItems([]);
    setShowModal(false);
    startTimer();
  };

  const goToHome = () => {
    navigate("/");
  };

  const startModal = {
    content:
      "Le but du jeu est de sélectionner un departement français sur une carte à partir d'un département donné.",
    title: "Trouve le département",
    confirm: "Jouer !",
    cancel: "Quitter",
    cancelAction: goToHome,
    confirmAction: restartGame,
    image: "france-yellow.svg",
  };

  const endGame = () => {
    stopTimer();
    const goodAwnsers = clickedItems.filter(
      (item) => item.color === "#2ECC71"
    ).length;

    const successPct = calculateSuccessPercentage(
      goodAwnsers,
      allDepartments.length
    );

    if (currentUser && currentUser?.email) {
      setUserScore(currentUser.email, "departements", timeInSec, successPct);
    }

    const endModal = {
      content: `${successPct.toFixed(2)}% de bonnes réponses en ${time}`,
      title: "Fin du jeu",
      confirm: "Rejouer !",
      cancel: "Quitter",
      cancelAction: goToHome,
      confirmAction: restartGame,
      image: "done.svg",
    };

    setModal(endModal);
    setShowModal(true);
  };

  const [modal, setModal] = useState(startModal);
  const [clickedItems, setClickedItems] = useState([]);
  const [departmentToFind, setDepartmentToFind] = useState({
    nom: "",
    code: "",
  });

  useEffect(() => {
    if (!showModal) {
      const departmentsNotClicked = allDepartments.filter(
        (department) =>
          !clickedItems.find((clicked) => clicked.code === department.code)
      );

      let newDepartmentToFind = "";

      if (departmentsNotClicked.length === 1) {
        newDepartmentToFind = departmentsNotClicked[0];
      } else if (departmentsNotClicked.length > 1) {
        newDepartmentToFind =
          departmentsNotClicked[
            Math.floor(Math.random() * departmentsNotClicked.length)
          ];
      } else {
        endGame();
      }

      setDepartmentToFind(newDepartmentToFind);
    }
  }, [clickedItems, showModal]);

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 8px)" }}>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          content={modal.content}
          title={modal.title}
          confirm={modal.confirm}
          cancel={modal.cancel}
          cancelAction={modal.cancelAction}
          confirmAction={modal.confirmAction}
          image={modal.image}
        />
      ) : (
        <>
          <ProgressBar
            pct={(clickedItems.length * allDepartments.length) / 100}
          />
          <Dashboard toFind={departmentToFind} />
          <ExitButton setOpenModal={setOpenModalExit} />
          <FranceMap
            data={departementsData.features}
            toFind={departmentToFind}
            clickedItems={clickedItems}
            setClickedItems={setClickedItems}
          />
          {openModalExit && (
            <Modal
              setShowModal={setOpenModalExit}
              content={
                "Voulez-vous vraiment quitter la partie ? votre score ne sera pas sauvegarder."
              }
              title={"Quitter la partie"}
              confirm={"Confirmer"}
              cancel={"Annuler"}
              image={"warn.svg"}
              cancelAction={() => setOpenModalExit(false)}
              confirmAction={() => navigate("/regions")}
            />
          )}
        </>
      )}
    </div>
  );
};

export default FindDepartments;
