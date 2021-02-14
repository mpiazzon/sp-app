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
        <Button label="Primary" />
        <Button label="Secondary" class="p-button-secondary" />
        <Button label="Success" class="p-button-success" />
        <Button label="Info" class="p-button-info" />
        <Button label="Warning" class="p-button-warning" />
        <Button label="Warning" class="p-button-help" />
        <Button label="Danger" class="p-button-danger" />
      </div>
      <div class="p-col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, atque sed
        aut ab ipsam consequuntur labore et eos quo suscipit possimus odit quas,
        molestias sapiente voluptatibus recusandae. Dignissimos, possimus aut.
      </div>
      <div class="p-col">
        <Card>
          <template #title> Advanced Card </template>
          <template #content>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            sed consequuntur error repudiandae numquam deserunt quisquam
            repellat libero asperiores earum nam nobis, culpa ratione quam
            perferendis esse, cupiditate neque quas!
          </template>
          <template #footer>
            <Button icon="pi pi-check" label="Save" />
            <Button
              icon="pi pi-times"
              label="Cancel"
              class="p-button-secondary"
              style="margin-left: 0.5em"
            />
          </template>
        </Card>
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
