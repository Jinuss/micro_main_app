<script setup lang="ts">
import Header from "./components/Header.vue";
import live from "./components/live2D/index.vue";
</script>

<template>
  <div class="page">
    <Header />
    <div id="main_container"></div>
    <!-- <live :size="350" :width="350" :height="500"></live> -->
  </div>
</template>

<style scoped>
.page {
  height: 100%;
  width: 100%;
}

#main_container {
  width: 100%;
  height: calc(100% - 60px);
  position: relative;
}
</style>
