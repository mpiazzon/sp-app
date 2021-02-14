<template>
  <div>
    <div class="p-grid p-mb-6">
      <div class="p-col">
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
        <Button label="Submit" class="p-button-text" />
        <Button icon="pi pi-check" class="p-button-text" />
        <Button label="Cancel" icon="pi pi-times" class="p-button-text" />
        <Button
          label="Search"
          icon="pi pi-search"
          iconPos="right"
          class="p-button-text p-button-text"
        />
        <Button label="Primary" class="p-button-raised p-button-rounded" />
        <Button label="Primary" class="p-button-outlined" />
        <Button label="Link" class="p-button-link" />
        <span class="p-buttonset">
          <Button label="Save" icon="pi pi-check" />
          <Button label="Delete" icon="pi pi-trash" />
          <Button label="Cancel" icon="pi pi-times" />
        </span>
      </div>
      <div class="p-col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, atque sed
        aut ab ipsam consequuntur labore et eos quo suscipit possimus odit quas,
        molestias sapiente voluptatibus recusandae. Dignissimos, possimus aut.
      </div>
      <div class="p-col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur minima
        ex modi error nobis officia incidunt possimus, velit explicabo illum
        unde, quae laudantium, soluta aspernatur laboriosam! Iusto voluptatibus
        odio provident.
      </div>
    </div>

    <hr />
    {{ count }}
    <div class="p-mt-6">
      <Button @click="increment()">incrementar</Button>

      <Button label="Submit" />
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
    const { state, increment } = global;
    increment();
    return { ...toRefs(state), increment, display };
  },
};
</script>
