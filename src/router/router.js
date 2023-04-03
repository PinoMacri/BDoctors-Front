import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import DoctorDetailPage from "../pages/doctors/DoctorDetailPage.vue";
import RegistrationForm from "../components/RegistrationForm.vue";
import ProfileRegistrationForm from "../components/ProfileRegistrationForm.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomePage },
    { path: "/ricerca", name: "ricerca", component: HomePage },
    {
      path: "/specializzazione",
      name: "specializzazione",
      component: HomePage,
    },
    { path: "/contatti", name: "contatti", component: HomePage },
    { path: "/chi-siamo", name: "chisiamo", component: HomePage },
    {
      path: "/doctors/:id",
      name: "doctor-detail",
      component: DoctorDetailPage,
    },
    {
      path: "/register",
      name: "register-form",
      component: RegistrationForm,
    },
    {
      path: "/profile-register",
      name: "profile-register-form",
      component: ProfileRegistrationForm,
    },

    { path: "/:pathMatch(.*)", redirect: "/" },
  ],
});
export { router };
