import { createApp } from "vue";
import App from "@/App.vue";
import router from "./router";
import store from "./store";

import mdiVue from "mdi-vue/v3";
import * as mdijs from "@mdi/js";

import VBtn from "@/components/VBtn.vue";
import VAvatar from "./components/VAvatar.vue";
import Loading from "@/components/LoadingSpinner.vue"
import VTable from "@/components/VTable.vue";
import MenuCard from "@/components/MenuCard.vue";
import VModal from "@/components/VModal.vue";
import PageHeader from "@/components/PageHeader.vue";
import LazyLoad from "./directives/LazyLoad";
import './assets/tailwind.css'
import 'animate.css';

createApp(App)
  .component("v-avatar", VAvatar)
  .component("v-btn", VBtn)
  .component("loading-spinner", Loading)
  .component("movie-table", VTable)
  .component("menu-card", MenuCard)
  .component("v-modal", VModal)
  .component("page-header", PageHeader)
  .directive("lazy-load", LazyLoad)
  .use(mdiVue, {
    icons: mdijs
  })
  .use(store)
  .use(router)
  .mount('#app');