<script setup>
import { useCounterProduct } from "@/stores/ProductsStore";
import { useCounterStore } from '@/stores/counter';
const CounterProduct = useCounterProduct();
const CounterStore = useCounterStore()


</script>

<template>
   <div class="header__navigation__products" v-show="CounterStore.searchmodal">
            <RouterLink @click="CounterProduct.getFetchProductsid(item.id),(CounterStore.searchmodal = false),(CounterStore.bgblack = false),CounterStore.bodyhiddenclosed()"
              class="header__navigation__products-card"
              v-for="item in CounterProduct.product"
              :key="item.id"
              :to="'/product/' + item.id"
            >
              <img :src="item.thumbnail" alt="" />
              <p>{{ item.title }}</p>
            </RouterLink>
          </div>
</template>

<style>

</style>