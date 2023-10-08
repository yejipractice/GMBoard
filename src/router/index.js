import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/page/Home.vue";
import Board from "@/components/page/Board.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/board",
        name: "Board",
        component: Board,
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;