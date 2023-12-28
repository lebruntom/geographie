import { MapContainer, GeoJSON, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
// import useSound from "use-sound";

const FranceMap = ({ data, toFind, clickedItems, setClickedItems }) => {
  const center = [46.64037232409269, 2.5651587672006486];
  const clickedItemsRef = useRef(clickedItems);
  const toFindRef = useRef(toFind);
  const [departementHovered, setDepartementHovered] = useState("");

  useEffect(() => {
    toFindRef.current = toFind;
  }, [toFind]);

  const checkIfItemIsClicked = (item) => {
    return clickedItemsRef.current.some(
      (clickedItem) => clickedItem.code === item.code
    );
  };

  const getItemColor = (item) => {
    const foundItem = clickedItemsRef.current.find(
      (clickedItem) => clickedItem.code === item.code
    );
    return foundItem ? foundItem.color : "#DEB270";
  };

  const handleClickOnItem = (item) => {
    const newData =
      item.code === toFindRef.current.code
        ? [...clickedItemsRef.current, { ...item, color: "#229553" }]
        : [
            ...clickedItemsRef.current,
            { ...toFindRef.current, color: "#D74233" },
          ];

    clickedItemsRef.current = newData;
    setClickedItems(newData);
  };

  const onEachItem = (data, layer) => {
    layer.on({
      mouseover: (e) => {
        setDepartementHovered(e.target.feature.properties);
      },
      mouseout: (e) => {
        setDepartementHovered("");
      },
      click: (e) => {
        handleClickOnItem(e.target.feature.properties);
      },
    });
  };

  const itemFillColor = (properties) => {
    if (checkIfItemIsClicked(properties)) {
      return getItemColor(properties);
    } else if (properties.code === departementHovered.code) {
      return "#023047";
    } else {
      return "#DEB270";
    }
  };

  return (
    <MapContainer
      center={center}
      zoom={6}
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=SngLj5RcHNMWSvq7xr1Q"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />
      <GeoJSON
        data={data}
        onEachFeature={onEachItem}
        style={(feature) => ({
          fillColor: itemFillColor(feature.properties),
          fillOpacity: 0.7,
          weight: 2,
          opacity: 1,
          color: "white",
        })}
      />
    </MapContainer>
  );
};

export default FranceMap;
