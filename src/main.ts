import { createApp } from "vue";
import { registerMicroApps, start } from "qiankun";
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
]);
start();
