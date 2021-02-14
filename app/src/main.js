import { createApp } from "vue";
import App from "./App.vue";

import "primevue/resources/themes/md-light-indigo/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

import "./index.css";

import PrimeVue from "primevue/config";
import Dialog from "primevue/dialog";

import Button from "primevue/button";

import Card from "primevue/card";

const app = createApp(App);

app.use(PrimeVue);

app.component("Dialog", Dialog);
app.component("Button", Button);
app.component("Card", Card);

app.mount("#app");
