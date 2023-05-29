//🌎 arcgis
import MapView from "@arcgis/core/views/MapView";
//🎉 third party
import { useRef, useEffect } from "react";
//📒mine
import { useMapStore } from "../hooks/mapStore";

export default function Map() {
  const mapDiv = useRef(null);
  const { webMap, setView } = useMapStore();

  useEffect(() => {
    if (mapDiv.current) {
      setView(
        new MapView({
          container: mapDiv.current,
          map: webMap,
        })
      );
    }
  }, []);

  return <div className="mapDiv w-screen h-screen" ref={mapDiv}></div>;
}
