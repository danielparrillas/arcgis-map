import { create } from "zustand";
import type MapView from "esri/views/MapView";

interface useMapProps {
  view: null | MapView;
  setView: (view: MapView) => void;
}

export const useMapStore = create<useMapProps>()((set) => ({
  view: null,
  setView: (view) => set(() => ({ view: view })),
}));
