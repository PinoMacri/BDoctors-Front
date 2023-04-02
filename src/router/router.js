import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/ricerca", name: "ricerca", component: HomePage },
    { path: "/specializzazione", name: "specializzazione", component: HomePage },
    { path: "/contatti", name: "contatti", component: HomePage },
    { path: "/chi-siamo", name: "chisiamo", component: HomePage },
    { path: "/:pathMatch(.*)", redirect: "/" },
    // { path: "/doctors/:id", name: "doctor-detail", component: DoctorDetailPage },
  ]
});
export { router };
