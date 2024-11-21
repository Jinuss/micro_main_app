<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import GithubIcon from "./GithubIcon.vue";
import { navRoutes } from "../router/index";

const router = useRouter();

const handleNav = ({ path, type }: { path: string; type: string }) => {
  if (type == "link") {
    window.open(path, "_blank");
    return;
  }
  router.push(path);
};

const activeRoute = ref({ path: "/" });
</script>
<template>
  <div class="layout-header">
    <ul>
      <li
        :class="{ active: activeRoute.path == route.path }"
        v-for="route in navRoutes"
        @click="() => handleNav(route)"
      >
        {{ route.name }}
        <span v-if="route.type == 'link'"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            ></path>
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            ></polygon>
          </svg>
        </span>
      </li>
    </ul>
    <GithubIcon />
  </div>
</template>
<style scoped>
.layout-header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 58px 0 20px;
  background-color: var(--primary-color, #fff);
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.08);
}
ul {
  display: flex;
  list-style: none;
}

li {
  cursor: pointer;
  font-size: 16px;
  margin: 0 10px;
  color: var(--primary-text-color, #000);
  opacity: 0.6;
  margin-right: 40px;
  font-weight: 700;
  display: flex;
  align-items: center;
}

li:hover,
li.active {
  opacity: 1;
}
</style>
