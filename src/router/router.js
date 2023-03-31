import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", name: "home", component: HomePage },
        { path: "/:pathMatch(.*)", redirect: "/" },
    ]
});
export { router };