<script setup>
import { useCounterProduct } from '@/stores/ProductsStore';
import Swiper from '../../Swiper/Swiper.vue';
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import { useLeng } from '@/stores/Lenguage';
const leng = useLeng()
const route = useRoute()
const CounterProduct = useCounterProduct()
CounterProduct.getFetchProductsCategory(route.params.category)
const sort = ref("Auto")

watch(sort,()=>{
   if(sort.value == "Auto"){
      CounterProduct.sortdefauld()
   } else if(sort.value == "Rating"){
      CounterProduct.sortReyting()
   } else if(sort.value == "Price"){
       CounterProduct.sortPrice()
   }
})
</script>


<template>
            <section class="CategoryPages">
            <select class="CategoryPages__sort" v-model="sort">
                  <option class="CategoryPages__sort__option" value="Auto" >{{ leng.sortautotext }}</option>
                  <option class="CategoryPages__sort__option" value="Rating">{{ leng.sortratingtext }}</option>
                  <option class="CategoryPages__sort__option" value="Price">{{ leng.sortpricetext }}</option>
            </select>
     
                <Swiper :smartphones="CounterProduct.productcategory"/>
            </section>
          

</template>



<style>

</style>