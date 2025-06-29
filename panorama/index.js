// src/index.js
import { el, mount } from "redom";
import { Viewer } from "@photo-sphere-viewer/core";

const viewerContainer = (
  <div id="viewer" className="container vh-100 vw-100"></div>
);
mount(document.body, viewerContainer);

const baseUrl = "https://photo-sphere-viewer-data.netlify.app/assets/";
new Viewer({
  container: viewerContainer,
  panorama: baseUrl + "sphere.jpg",
  caption: "Parc national du Mercantour <b>&copy; Damien Sorel</b>",
  loadingImg: baseUrl + "loader.gif",
  touchmoveTwoFingers: true,
  mousewheelCtrlKey: true,
});

console.log("Application started!");
