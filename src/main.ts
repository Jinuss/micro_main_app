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
    props: {
      sandbox: {
        strictStyleIsolation: false,
        disableCss: true,  // 禁用沙箱中的 CSS 隔离
        disableInlineScript: false  // 允许内联脚本
      }
    }
  },
]);
start();
