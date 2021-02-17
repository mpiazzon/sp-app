<template>
  <div id="app">
    <div class="box">
      <h2>Probando esto</h2>
      <p class="bg-red-200 text-2xl text-blue-200">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
        laudantium, delectus, suscipit non fugiat ducimus ad officiis,
        reprehenderit repellendus repudiandae eveniet officia in tempore quos
        libero amet! Amet, tempora porro!
      </p>
    </div>
  </div>
</template>

<script>
import global from "./composables/global.js";
import { toRefs, getCurrentInstance } from "vue";
export default {
  name: "App",
  setup() {
    const display = true;
  },
};
</script>
