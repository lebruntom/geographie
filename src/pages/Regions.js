import React from "react";
// import Title from "../components/game/Title";
import Card from "../components/game/Card";
import Score from "../components/game/Score";
import Discover from "../components/game/Discover";
import RandomRegion from "../components/game/RandomRegion";

const Regions = () => {
  return (
    <div>
      <div
        style={{ minHeight: "calc(100vh - 150px)" }}
        className="flex p-[50px] justify-between items-center"
      >
        <div className="w-1/3 flex flex-col items-center">
          <div className="mb-[25px] text-xl font-bold text-blue">
            Révisez vos régions
          </div>
          <RandomRegion />
        </div>
        <div className="w-2/3 pl-[100px] flex flex-col justify-between">
          <div>
            <div className="text-3xl font-bold uppercase text-blue mb-6">
              Régions
            </div>
            <div className="mb-[25px]">
              Le principe du jeu est de sélectionner une région française sur
              une carte à partir d'une région donnée.
            </div>
          </div>
          <Card
            title={"Trouver la région"}
            content={
              <>
                <div>
                  Le principe du jeu est de sélectionner une région française
                  sur une carte à partir d'une région donnée
                </div>
                <div>Arriverez vous à toutes les trouver ?</div>
              </>
            }
            linkTo={"/regions/find"}
          />
        </div>
      </div>

      <div className="m-[50px]">
        <Score />
      </div>

      <Discover
        title={"Trouve le département"}
        content={
          <>
            <div>
              Le principe du jeu est de sélectionner un departement français sur
              une carte à partir d'une région donnée.
            </div>
            <div>Arriverez vous à toutes les trouver ?</div>
          </>
        }
      />
    </div>
  );
};

export default Regions;
