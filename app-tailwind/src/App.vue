<template>
  <div id="app">
    <div class="flex h-screen">
      <div class="flex-none w-48">
        <h3 class="text-center pt-2 font-semibold">Logo</h3>

        <div class="flex flex-col mt-3">
          <a
            href=""
            class="border-gray-300 border-solid border-b-2 border-t-2 w-full text-center py-3"
            >HOME</a
          >
          <a
            href=""
            class="border-gray-300 border-solid border-b-2 w-full text-center py-3"
            >PRODUCTOS</a
          >
          <a
            href=""
            class="border-gray-300 border-solid border-b-2 w-full text-center py-3"
            >CLIENTES</a
          >
          <a
            href=""
            class="border-gray-300 border-solid border-b-2 w-full text-center py-3"
            >CONFIGURACION</a
          >
          <a href="" class="bg-gray-200 w-full text-center py-3"
            >PROOVEEDORES</a
          >
        </div>
      </div>
      <div class="flex-grow flex bg-gray-200 p-5">
        <div>
          <h1 class="text-3xl font-bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            molestias voluptatum animi quisquam nobis minima, accusantium
            repudiandae saepe esse tenetur ea aliquam dolore sunt culpa sed non
            accusamus doloribus hic.
          </h1>
        </div>
        <div class="flex-none w-96 flex flex-col">
          <div
            class="bg-gray-800 text-gray-50 flex flex-col justify-center items-center p-3 mb-3"
          >
            <p class="text-4xl mb-3">TOTAL</p>
            <p class="text-6xl m">$ 1245,00</p>
          </div>
          <button class="bg-red-800 text-gray-50 py-3 uppercase mb-3">
            Cobrar e imprimir
          </button>
          <button class="bg-green-600 text-gray-50 py-3 uppercase">
            Cobrar e imprimir
          </button>
        </div>
      </div>
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
