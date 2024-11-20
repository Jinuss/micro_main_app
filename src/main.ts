import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
import "./style.css";
import App from "./App.vue";

createApp(App).mount("#app");

registerMicroApps([
  {
    name: "iceApp",
    entry: "//localhost:5157",
    container: "#main_container",
    activeRule: "/cesium",
  },
]);
start();
