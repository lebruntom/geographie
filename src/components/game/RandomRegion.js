import React, { useContext } from "react";
import { RegionContext } from "../../store/RegionContext";

const RandomRegion = () => {
  const { randomRegion } = useContext(RegionContext);

  return (
    <div className="flex flex-col justify-center">
      {randomRegion.image && (
        <img
          src={require(`../../assets/img/game/regions/${randomRegion.image}`)}
          alt="Alt Text"
          className="max-w-[250px] lg:max-w-[300px]"
        />
      )}
      <div className="text-center text-orange text-lg">{randomRegion.name}</div>
    </div>
  );
};

export default RandomRegion;
