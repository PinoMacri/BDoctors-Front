import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import DoctorDetailPage from "../pages/doctors/DoctorDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    {
      path: "/doctors/:id",
      name: "doctor-detail",
      component: DoctorDetailPage,
    },
    { path: "/:pathMatch(.*)", redirect: "/" },
  ],
});
export { router };
