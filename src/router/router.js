import { createRouter, createWebHistory } from "vue-router";
import DiscoveryView from "@/pages/DiscoveryView.vue";
import PlaylistDetail from "@/pages/PlaylistDetail.vue";
import RecommendPlaylist from "@/pages/RecommendPlaylist.vue";
import RecommendMusic from "@/pages/RecommendMusic.vue";
import SearchView from "@/pages/SearchView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/discovery" },
    { path: "/discovery", component: DiscoveryView },
    { path: "/playlist", component: PlaylistDetail },
    { path: "/discovery/playlist", component: RecommendPlaylist },
    { path: "/discovery/music", component: RecommendMusic },
    { path: "/search", component: SearchView },
  ],
});

export default router;
