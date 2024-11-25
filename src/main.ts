import { createApp } from "vue";
import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
import "../reset.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");

registerMicroApps([
  {
    name: "cesiumApp",
    entry: "//localhost:5157",
    container: "#main_container",
    activeRule: "/cesium",
  },
  {
    name: "mapboxApp",
    entry: "//localhost:5158",
    container: "#main_container",
    activeRule: "/mapbox",
  },
  /*{
  name: "openlayersApp",
  entry: "//localhost:5159",
  container: "#main_container",
  activeRule: "/openlayers",
},
*/
]);

start();

setDefaultMountApp("/mapbox");
