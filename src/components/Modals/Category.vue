<script setup>
import { useCounterProduct } from "@/stores/ProductsStore";
import { useCounterStore } from "@/stores/counter";
import { useLeng } from "@/stores/Lenguage";
import { useRoute } from "vue-router";
const leng = useLeng();
const CounterProduct = useCounterProduct();
const CounterStore = useCounterStore();
const route = useRoute()
console.log(+route.query.page || 1)
</script>


<template>
  <div
    class="header__modal"
    :class="{ activemodal: CounterStore.categorymodal }"
  >
    <h4>{{ leng.hdcatalog }}</h4>
    <div class="header__modal-cards">
      <p
        class="header__modal-cards-card"
        v-for="item in CounterProduct.productcategories"
        :key="item"
      >
        <RouterLink
          @click="
            CounterProduct.getFetchProductsCategory(item),(CounterStore.categorymodal = false),
              CounterProduct.sortdefauld()" 
              :to="'/category/' + item">{{ item }}</RouterLink>
      </p>
    </div>
  </div>
</template>



<style>
</style>