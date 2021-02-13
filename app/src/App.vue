<template>
  <div>
    <h1>test</h1>
    {{ count }}
    <button @click="increment()">incrementar</button>
  </div>
</template>

<script>
import global from "./composables/global.js";
import { toRefs, getCurrentInstance } from "vue";
export default {
  name: "App",
  setup() {
    const { state, increment } = global;
    increment();
    return { ...toRefs(state), increment };
  },
};
</script>
