import { createRouter, createWebHistory } from "vue-router";

import DiscoveryView from "../pages/DiscoveryView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/discovery" },
    { path: "/discovery", component: DiscoveryView },
  ],
});

export default router;
