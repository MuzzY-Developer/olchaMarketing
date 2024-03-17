<script setup>
import { useCounterProduct } from "@/stores/ProductsStore";
import { useRoute } from "vue-router";
import Cardid from "@/components/Cards/Cardid.vue";
const route = useRoute();
const CounterProduct = useCounterProduct();
// CounterProduct.getFetchProductsAll()
CounterProduct.getFetchProductsid(+route.params.id);
</script>

<template>
  <Cardid :info2="CounterProduct.productid" />
</template>

<style></style>
