import React, { useEffect, useState, useMemo, useContext } from "react";
import FranceMap from "../components/FranceMap";
import Dashboard from "../components/Dashboard";
import { regionsData } from "../utils/data/regions";
import Modal from "../components/Modal";
import { useNavigate } from "react-router-dom";
import useTimer from "../hooks/useTimer";
import { calculateSuccessPercentage } from "../utils/game";
import ProgressBar from "../components/ui/ProgressBar";
import { setUserScore } from "../api/user";
import { AuthContext } from "../store/AuthContext";
import ExitButton from "../components/ExitButton";

const FindRegions = () => {
  const allRegions = useMemo(
    () => [...regionsData.features.map((region) => region.properties)],
    []
  );

  const navigate = useNavigate();
  const [clickedItems, setClickedItems] = useState([]);
  const [showModal, setShowModal] = useState(true);
  const [openModalExit, setOpenModalExit] = useState(false);
  const { time, startTimer, stopTimer, resetTimer, timeInSec } = useTimer();
  const { currentUser } = useContext(AuthContext);

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
      "Le but du jeu est de sélectionner une région française sur une carte à partir d'une région donnée.",
    title: "Trouve la région",
    confirm: "Jouer !",
    cancel: "Quitter",
    image: "france-yellow.svg",
    cancelAction: goToHome,
    confirmAction: restartGame,
  };

  const endGame = () => {
    stopTimer();
    const goodAwnsers = clickedItems.filter(
      (item) => item.color === "#229553"
    ).length;

    const successPct = calculateSuccessPercentage(
      goodAwnsers,
      allRegions.length
    );

    if (currentUser && currentUser?.email) {
      setUserScore(currentUser.email, "regions", timeInSec, successPct);
    }

    const endModal = {
      content: (
        <div>
          Vous avez placé correctement <strong>{successPct.toFixed(2)}%</strong>{" "}
          de régions en <strong>{time}</strong>
        </div>
      ),
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

  const [regionToFind, setRegionToFind] = useState({ nom: "", code: "" });
  useEffect(() => {
    if (!showModal) {
      const regionsNotClicked = allRegions.filter(
        (region) =>
          !clickedItems.find((clicked) => clicked.code === region.code)
      );

      let newRegionToFind = "";

      if (regionsNotClicked.length === 1) {
        newRegionToFind = regionsNotClicked[0];
      } else if (regionsNotClicked.length > 1) {
        newRegionToFind =
          regionsNotClicked[
            Math.floor(Math.random() * regionsNotClicked.length)
          ];
      } else {
        endGame();
      }

      setRegionToFind(newRegionToFind);
    }
  }, [clickedItems, showModal]);

  console.log(openModalExit);

  return (
    <div className="relative w-full" style={{ height: "calc(100vh - 8px)" }}>
      {showModal ? (
        <Modal
          image={modal.image}
          setShowModal={setShowModal}
          content={modal.content}
          title={modal.title}
          confirm={modal.confirm}
          cancel={modal.cancel}
          cancelAction={modal.cancelAction}
          confirmAction={modal.confirmAction}
        />
      ) : (
        <>
          <ProgressBar pct={(clickedItems.length * 100) / allRegions.length} />
          <Dashboard toFind={regionToFind} />
          <ExitButton setOpenModal={setOpenModalExit} />
          <FranceMap
            data={regionsData.features}
            toFind={regionToFind}
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

export default FindRegions;
