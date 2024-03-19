<script setup>
import { useCounterProduct } from "@/stores/ProductsStore";
import { useCounterStore } from "@/stores/counter";
import { ref, watch } from "vue";
import Navbar from "../Navbar/Navbar.vue";
import { useLeng } from "@/stores/Lenguage";
import debounce from "lodash.debounce";
import acount from "@/components/Modals/Account.vue";
import categorymodal from "@/components/Modals/Category.vue";
import searchmodal from "@/components/Modals/Search.vue";
import basketmodal from "@/components/Modals/Basket.vue";
import { useRoute } from "vue-router";
const leng = useLeng();
const CounterProduct = useCounterProduct();
const CounterStore = useCounterStore();
CounterProduct.getFetchProductsCategories();
CounterStore.totalproductprice();
CounterProduct.getFetchProductsAll();
const search = ref("");
const route = useRoute();
function rec() {
  setTimeout(function () {
    CounterStore.rec();
    rec();
  }, 1000);
}
rec();
window.addEventListener("scroll", function () {
  var scroll = document.querySelector(".header");
  scroll.classList.toggle("activeshadow", window.scrollY > 100);
});

const test = ref(window.innerWidth > 768 ? 12 : 4)






const currentPage = ref(+route.query.page || 1);

watch(
  search,
  debounce(() => {
    if (search.value.length > 0) {
    CounterProduct.getFetchProducts(currentPage.value * test.value - test.value, search.value.trim())
  } else {
    CounterProduct.getFetchProducts(CounterProduct.page * test.value - test.value, search.value.trim())
  }
  }, 1000)
);

</script>

<template>
  <Navbar />
  <header class="header">
    <div
      class="bg-black-window"
      v-show="CounterStore.bgblack"
      @click="
        (CounterStore.bgblack = false),
          (CounterStore.searchmodal = false),
          CounterStore.bodyhiddenclosed(),
          (CounterStore.categorymodal = false)
      "
    ></div>
    <div class="container">
      <div class="header__navigation">
        <h3 class="header__navigation__logo">
          <RouterLink to="/">Olcha</RouterLink>
        </h3>
        <div
          class="header__navigation__burgers"
          @click="
            (CounterStore.categorymodal = !CounterStore.categorymodal),
              (CounterStore.basketmodal = false),
              (CounterStore.burgermodal = false)
          "
        >
          <div class="header__navigation__burgers-burger">
            <div
              class="header__navigation__burgers-burger-btn"
              :class="{ activeburger: CounterStore.categorymodal }"
            >
              <span></span>
            </div>
          </div>
          <h4 class="header__navigation__burgers-title">
            {{ leng.hdcatalog }}
          </h4>
        </div>

        <div class="con-search">
          <div class="header__navigation__search">
            <input
              class="input"
              @click="
                (CounterStore.bgblack = true),
                  CounterStore.bodyhiddenopen(),
                  (CounterStore.categorymodal = false)
              "
              :class="{ 'activeinput': CounterStore.bgblack }"
              type="search"
              v-model="search"
              :placeholder="leng.hdpoisktext"
              @input="CounterStore.searchproduct($event.target.value)"
          
            />
            <RouterLink
              class="header__navigation__search-btn"
              to="/product"
              @click="
                (CounterStore.bgblack = false),
                  (CounterStore.searchmodal = false),
                  CounterStore.bodyhiddenclosed()
              "
              ><img src="@/assets/icons/search.svg" alt=""
            /></RouterLink>
          </div>
          <searchmodal />
        </div>

        <div class="header__navigation__favorites">
          <button
            v-show="CounterStore.basketuseractive"
            class="header__navigation__favorites-button"
            @click="
              (CounterStore.basketmodal = true),
                (CounterStore.categorymodal = false),
                (CounterStore.burgermodal = false)
            "
          >
            <img class="img1" src="@/assets/icons/cart1.svg" alt="" />
            <img class="img2" src="@/assets/icons/cart2.svg" alt="" />
            <h3 class="basket">{{ CounterStore.totalbasketamount }}</h3>
            <span>{{ leng.hdbasket }}</span>
          </button>

          <button
            v-show="CounterStore.basketusernonactive"
            class="header__navigation__favorites-button"
          >
            <img class="img3" src="@/assets/icons/cart3.svg" alt="" />
            <p>{{ leng.hdbasket }}</p>
          </button>

          <button
            class="header__navigation__favorites-button"
            v-show="CounterStore.accountuseractive"
            @click="
              (CounterStore.accountemodal = true), CounterStore.bodyhiddenopen()
            "
          >
            <img class="img1" src="@/assets/icons/user1.svg" alt="" />
            <img class="img2" src="@/assets/icons/user2.svg" alt="" />
            <span>{{ leng.hdaccount }}</span>
          </button>
          <button
            class="header__navigation__favorites-button"
            @click="CounterStore.exituser()"
            v-show="CounterStore.accountusernonactive"
          >
            <img class="img1" src="@/assets/icons/exit1.svg" alt="" />
            <img class="img2" src="@/assets/icons/exit2.svg" alt="" />
            <span>{{ leng.hdexit}}</span>
          </button>
        </div>
      </div>

      <basketmodal />
      <categorymodal />
    </div>
    <acount />
  </header>
</template>

<style></style>
