import React, { useEffect, useState } from "react";
import { regionsData } from "../utils/data/regions";

export const RegionContext = React.createContext();

export const RegionProvider = ({ children }) => {
  const regionsToExclude = ["04", "06", "01", "02", "03"];
  const regions = regionsData.features.filter(
    (reg) => !regionsToExclude.find((value) => value === reg.properties.code)
  );

  const [randomRegion, serRandomRegion] = useState({
    name: "Normandie",
    image: "france-normandie.svg",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * regions.length);

      serRandomRegion({
        name: regions[randomNumber].properties.nom,
        image: regions[randomNumber].properties.image,
      });
    }, 3000);

    // Nettoyer l'intervalle lors du démontage du composant
    return () => clearInterval(intervalId);
  }, [regions]);

  return (
    <RegionContext.Provider
      value={{
        randomRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};
