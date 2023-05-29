//🌎 arcgis
import MapView from "@arcgis/core/views/MapView";
import WebMap from "@arcgis/core/WebMap";
import config from "@arcgis/core/config";
//🎉 third party
import { create } from "zustand";

config.apiKey =
  "AAPKd049885b0910426db536781c03b20661HIFgGhU3Hh7xnuoUq8lhAvUhEysGdin0RrXYMAotKJjivYAmbr0Pn7EKiOAOSBeB";

interface useMapProps {
  view: null | MapView;
  webMap: WebMap;
  setView: (view: MapView) => void;
}

export const useMapStore = create<useMapProps>()((set) => ({
  view: null,
  webMap: new WebMap({
    portalItem: {
      id: "aa1d3f80270146208328cf66d022e09c",
    },
  }),
  setView: (view) => set(() => ({ view: view })),
}));
