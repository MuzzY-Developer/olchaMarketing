<script setup>
 import Swiper from "@/components/Swiper/Swiper.vue";
 import { useCounterProduct } from "@/stores/ProductsStore";
 import { useLeng } from "@/stores/Lenguage";
 const leng = useLeng()
const CounterProduct = useCounterProduct()
CounterProduct.getFetchProductsPopular()
</script>


<template>
   <section>
    <h2>{{ leng.populartext }}</h2>
     <Swiper :smartphones="CounterProduct.productpopular"/>
   </section>
</template>



<style>

</style>