import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import DoctorDetailPage from "../pages/doctors/DoctorDetailPage.vue";
import Dilops from "../components/articoli/Dilops.vue";
import Pantamedica from "../components/articoli/Pantamedica.vue";
import Naturopati from "../components/articoli/Naturopati.vue";
import Suture from "../components/articoli/Suture.vue";
import Ronconi from "../components/articoli/Ronconi.vue";
import Colesterolo from "../components/articoli/Colesterolo.vue";
import Risk from "../components/articoli/Risk.vue";
import Udito from "../components/articoli/Udito.vue";
import Infermiere from "../components/articoli/Infermiere.vue";
import Mentale from "../components/articoli/Mentale.vue";
import Rare from "../components/articoli/Rare.vue";

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

    { path: "/sistema-dilops", name: "dilops", component: Dilops },
    { path: "/centro-diagnostico-pantamedica", name: "pantamedica", component: Pantamedica },
    { path: "/diventare-naturopati", name: "naturopati", component: Naturopati },
    { path: "/suture", name: "suture", component: Suture },
    { path: "/studio-ronconi", name: "ronconi", component: Ronconi },
    { path: "/colesterolo", name: "colesterolo", component: Colesterolo },
    { path: "/risk-management", name: "risk-management", component: Risk },
    { path: "/giornata-mondiale-udito", name: "giornata-mondiale-udito", component: Udito },
    { path: "/super-infermiere", name: "super-infermiere", component: Infermiere },
    { path: "/salute-mentale", name: "salute-mentale", component: Mentale },
    { path: "/malattie-rare", name: "malattie-rare", component: Rare },

    { path: "/:pathMatch(.*)", redirect: "/" },
  ],
});
export { router };
