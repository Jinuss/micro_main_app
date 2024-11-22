import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/",
    redirect: "/openlayers",
    name: "主页",
  },
  {
    path: "/openlayers",
    name: "Openlayers",
    type: "map",
  },
  {
    path: "/cesium",
    name: "Cesium",
    type: "map",
  },
  {
    path: "/mapbox",
    name: "mapbox",
    type: "map",
  },
];

export const navRoutes = [
  ...routes,
  {
    path: "https://jinuss.github.io/blog/",
    name: "Blog",
    type: "link",
  },
  {
    path: "https://blog.csdn.net/m0_46281382?type=blog",
    name: "CSDN",
    type: "link",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
