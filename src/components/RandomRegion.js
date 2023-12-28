import React, { useContext } from "react";
import { RegionContext } from "../store/RegionContext";

const RandomRegion = () => {
  const { randomRegion } = useContext(RegionContext);

  return (
    <div className="flex flex-col justify-center">
      {randomRegion.image && (
        <img
          src={require(`../assets/img/regions/${randomRegion.image}`)}
          alt="Alt Text"
          className="max-w-[250px] lg:max-w-[400px]"
        />
      )}
      <div className="text-center text-yellow text-lg">{randomRegion.name}</div>
    </div>
  );
};

export default RandomRegion;
