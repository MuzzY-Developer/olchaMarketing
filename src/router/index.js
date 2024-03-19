import { createRouter, createWebHistory } from "vue-router";
import HomePages from "@/components/Pages/HomePages.vue";
import { useCounterProduct } from "@/stores/ProductsStore";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePages,
    },
    {
      path: "/product",
      name: "product",
      component: () => import("@/views/SearchProduct.vue"),
    },
    {
      path: "/product/:id",
      name: "productid",
      component: () => import("@/views/Products.vue"),
      beforeEnter(to, from) {
        const CounterProduct = useCounterProduct();
        const exists = to.params.id <= CounterProduct?.total && to.params.id > 0;
        if (!exists) {
          return {
            name: "notfound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash,
          };
        }
      },
    },
    {
      path: "/category/:category",
      name: "category",
      component: () =>
        import("@/components/Pages/Categorypages/CategoryPages.vue"),
      beforeEnter(to, from) {
        const CounterProduct = useCounterProduct();
        const exists = CounterProduct.productcategories?.find(
          (item) => item == to.params.category
        );
        if (!exists) {
          return {
            name: "notfound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
          };
        }
      },
    },
    {
      path: "/razigr",
      name: "razigr",
      component: () => import("@/components/Pages/Razigrpages/Razigrpages.vue"),
    },
    {
      path: "/karta",
      name: "karta",
      component: () => import("@/components/Pages/Kartapages/Kartapages.vue"),
    },
    {
      path: "/company",
      name: "company",
      component: () =>
        import("@/components/Pages/Companypages/Companypages.vue"),
    },

    {
      path: "/vacancy",
      name: "vacancy",

      component: () =>
        import("@/components/Pages/Vacancypages/Vacancypages.vue"),
    },
    {
      path: "/vozvrat",
      name: "vozvrat",

      component: () =>
        import("@/components/Pages/Vozvratpages/Vozvratpages.vue"),
    },
    {
      path: "/rasrochka",
      name: "rasrochka",

      component: () =>
        import("@/components/Pages/Rasrochkapages/Rasrochkapages.vue"),
    },
    {
      path: "/dostavka",
      name: "dostavka",

      component: () =>
        import("@/components/Pages/Dostavkapages/Dostavkapages.vue"),
    },
    {
      path: "/ecofriend",
      name: "ecofriend",

      component: () =>
        import("@/components/Pages/Ecofriendlypages/Ecofriendlypages.vue"),
    },
    {
      path: "/prodayte",
      name: "prodayte",

      component: () =>
        import("@/components/Pages/Prodavaytepages/Prodavaytepages.vue"),
    },

    {
      path: "/:pathMatch(.*)*",
      name: "notfound",

      component: () =>
        import("@/components/Pages/Notfoundpages/Notfoundpages.vue"),
    },
  ],
});

export default router;
