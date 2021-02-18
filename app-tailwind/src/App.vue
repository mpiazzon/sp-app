<template>
  <div id="app">
    <div class="flex h-screen">
      <div class="flex-none w-16 bg-purple-200">This item will not grow</div>
      <div class="flex-grow h-16">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, qui
        similique. Ipsa voluptatem, non modi necessitatibus mollitia amet
        perspiciatis pariatur fugit dolorem enim harum sit sunt culpa doloribus.
        Itaque, repudiandae!
      </div>
      <div class="flex-none w-16 h-16">This item will not grow</div>
    </div>
    <div class="box">
      <h1 class="text-3xl font-bold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nihil
        veniam quidem ratione voluptatem ipsum inventore ea nobis, consectetur
        cumque ullam voluptas. Quibusdam, officia enim illum non reprehenderit
        velit exercitationem!
      </h1>
      <h2>Probando esto</h2>
      <p class="bg-blue text-2xl text-blue-800">
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
