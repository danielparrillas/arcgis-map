//🌎 arcgis
import Bookmarks from "@arcgis/core/widgets/Bookmarks";
import Expand from "@arcgis/core/widgets/Expand";
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import config from "@arcgis/core/config";
//🎉 third party
import { useRef, useEffect } from "react";
//📒mine
import { useMapStore } from "./hooks/mapStore";
import Test from "./components/Test";

config.apiKey =
  "AAPKd049885b0910426db536781c03b20661HIFgGhU3Hh7xnuoUq8lhAvUhEysGdin0RrXYMAotKJjivYAmbr0Pn7EKiOAOSBeB";

function App() {
  const { view, setView } = useMapStore();
  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new WebMap({
        portalItem: {
          id: "aa1d3f80270146208328cf66d022e09c",
        },
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
      });
      setView(view);
    }
  }, []);

  return (
    <div>
      <div className="mapDiv w-screen h-screen" ref={mapDiv}></div>
      <Test />
    </div>
  );
}

export default App;
