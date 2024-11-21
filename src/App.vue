<script setup lang="ts">
import Header from "./components/Header.vue";
</script>

<template>
  <div class="page">
    <Header />
    <div id="main_container"></div>
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
}
</style>
