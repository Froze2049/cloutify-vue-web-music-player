import { createRouter, createWebHistory } from "vue-router";

import DiscoveryView from "@/pages/DiscoveryView.vue";
import PlaylistDetail from "@/pages/PlaylistDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/discovery" },
    { path: "/discovery", component: DiscoveryView },
    { path: "/playlist", component: PlaylistDetail },
  ],
});

export default router;
