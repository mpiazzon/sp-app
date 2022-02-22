<template>
  <Menubar :model="uu">
    <template #item="{ item }">
      {{ item.label }}
    </template>
  </Menubar>

  <Button label="Submit" icon="pi pi-check" iconPos="right" />

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
  <Button label="Primary" />
  <Button label="Secondary" class="p-button-secondary" />
  <Button label="Success" class="p-button-success" />
  <Button label="Info" class="p-button-info" />
  <Button label="Warning" class="p-button-warning" />
  <Button label="Warning" class="p-button-help" />
  <Button label="Danger" class="p-button-danger" />

  <hr />
  {{ count }}

  <Button @click="increment()">incrementar</Button>

  <Button label="Submit" />
</template>

<script>
import global from "./composables/global.js";
import { toRefs, getCurrentInstance } from "vue";
export default {
  name: "App",
  setup() {
    const hola = "munhh";
    const uu = [
      {
        label: "Route Path",
        icon: "pi pi-plus",
        to: "/fileupload",
      },
      {
        label: "Named Route",
        icon: "pi pi-plus",
        to: { name: "fileupload" },
      },
      {
        label: "External",
        icon: "pi pi-check",
        url: "https://www.primefaces.org/primevue",
      },
    ];
    const display = true;
    const { state, increment } = global;
    increment();
    return { ...toRefs(state), increment, display, uu, hola };
  },
};
</script>
