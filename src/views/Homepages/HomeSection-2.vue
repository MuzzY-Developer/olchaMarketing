<script setup>
 import Swiper from "@/components/Swiper/Swiper.vue";
 import { useCounterProduct } from "@/stores/ProductsStore";
 import { useLeng } from "@/stores/Lenguage";
 const leng = useLeng()
const CounterProduct = useCounterProduct()
CounterProduct.getFetchProductsSmartphones()

</script>


<template>
   <section>
    <h2>{{leng.smartphonetext}}</h2>
     <Swiper v-if="CounterProduct.productsmartphones" :smartphones="CounterProduct?.productsmartphones"/>
   </section>
</template>



<style>

</style>