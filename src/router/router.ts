import { createRouter, createWebHistory, type RouteLocationNormalized } from "vue-router";
import Home from "@/views/Home.vue";
import GrammarLoader from "@/views/GrammarLoader.vue";
import NotFound from "../views/NotFound.vue";
import { getMainListsValue } from "@/lists";

const mainListRegex = getMainListsValue().join("|");
let lastRoute: RouteLocationNormalized | null = null;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        title: "Kobudai"
      }
    },
    {
      path: `/:mainlist(${mainListRegex})/:sublist`,
      name: "list",
      component: Home,
      meta: {
        title: "Kobudai"
      }
    },
    {
      path: "/grammar/:slug",
      name: "grammarLoader",
      component: GrammarLoader
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  lastRoute = from;
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
export { lastRoute };
