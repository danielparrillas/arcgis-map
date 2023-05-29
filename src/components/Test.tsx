//🌎 arcgis
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
//📒mine
import { useMapStore } from "../hooks/mapStore";
import { useEffect } from "react";

export default function Test() {
  const { view } = useMapStore();

  useEffect(() => {
    if (!!view) {
      const popupTrailheads = {
        title: "Trailhead",
        content:
          "<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft",
      };

      const trailheads = new FeatureLayer({
        url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
        outFields: ["TRL_NAME", "CITY_JUR", "X_STREET", "PARKING", "ELEV_FT"],
        popupTemplate: popupTrailheads,
      });

      view.map.add(trailheads);
    }
  }, [view]);

  return <div className="bg-white text-neutral-800 p-4">Menu</div>;
}

// const bookmarks = new Bookmarks({
//   view,
//   // allows bookmarks to be added, edited, or deleted
//   editingEnabled: true,
// });

// const bkExpand = new Expand({
//   view,
//   content: bookmarks,
//   expanded: true,
// });

// // Add the widget to the top-right corner of the view
// view.ui.add(bkExpand, "top-right");

// // bonus - how many bookmarks in the webmap?
// webmap.when(() => {
//   if (webmap.bookmarks && webmap.bookmarks.length) {
//     console.log("Bookmarks: ", webmap.bookmarks.length);
//   } else {
//     console.log("No bookmarks in this webmap.");
//   }
// });

// const popupTrailheads = {
//   title: "Trailhead",
//   content:
//     "<b>Trail:</b> {TRL_NAME}<br><b>City:</b> {CITY_JUR}<br><b>Cross Street:</b> {X_STREET}<br><b>Parking:</b> {PARKING}<br><b>Elevation:</b> {ELEV_FT} ft",
// };

// const trailheads = new FeatureLayer({
//   url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/arcgis/rest/services/Trailheads_Styled/FeatureServer/0",
//   outFields: ["TRL_NAME", "CITY_JUR", "X_STREET", "PARKING", "ELEV_FT"],
//   popupTemplate: popupTrailheads,
// });

// view.map.add(trailheads);
