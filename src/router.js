import { createRouter, createWebHistory } from "vue-router"
import UserProfile from "./pages/UserProfile.vue"
import HomePage from "./pages/HomePage.vue"
import RegisterPage from "./pages/RegisterPage.vue"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomePage
    },
    {
        path: "/user/:username",
        name: "user",
        component: UserProfile
    },
    {
        path: "/register",
        name: "register",
        component: RegisterPage
    }
];

const router = createRouter({
    routes: routes,
    history: createWebHistory(),
})

export default router;