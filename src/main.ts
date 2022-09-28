import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFaceGrinWide,
  faListUl,
  faRotateRight,
  faThLarge,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);
library.add(faListUl, faFaceGrinWide, faThLarge, faTrash, faRotateRight);
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(router);
app.mount("#app");
