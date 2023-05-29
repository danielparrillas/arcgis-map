//🌎 arcgis
import MapView from "@arcgis/core/views/MapView";
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle";
//🎉 third party
import { useRef, useEffect } from "react";
//📒mine
import { useMapStore } from "../hooks/mapStore";

export default function Map() {
  const mapDiv = useRef(null);
  const { view, webMap, setView } = useMapStore();

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

  useEffect(() => {
    if (!!view) {
      const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery",
      });

      view.ui.add(basemapToggle, "bottom-right");
    }
  }, [view]);

  return <div className="mapDiv w-full h-screen" ref={mapDiv}></div>;
}
