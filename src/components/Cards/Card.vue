<script setup>
import { useCounterStore } from '@/stores/counter';
import { useLeng } from '@/stores/Lenguage';
const leng = useLeng()
const CounterStore = useCounterStore()
const props =defineProps({
    info1:{
        type:Object,
        required:true
    }
})



</script>



<template>
 <div class="product__card">
    <img class="product__card__img" :src="info1?.thumbnail" alt="">
    <ul class="product__card__text">
        <li class="product__card__text-title">{{info1?.title}}</li>
        <li class="product__card__text-price"><span>{{leng.pricetextcard}}</span>{{info1?.price}} $</li>
        <li class="product__card__text-category">{{ leng.categorytextcard }} <span>{{info1?.category}}</span></li>

    </ul>

   <div class="product__card__rating">
     <span class="product__card__rating-rate">{{info1?.rating}}</span>
     <span class="product__card__rating-count">{{info1?.stock}}</span>
   </div>

    <div class="product__card__basket">
        <RouterLink :to="'/product/' + info1?.id" class="product__card__basket-btninfo">{{ leng.abouttextcard }}</RouterLink>
        <button class="product__card__basket-btnbasket"  v-show="CounterStore.basketbutton"
        @click="CounterStore.addToBasket(info1),CounterStore.totalproductprice(),CounterStore.totalbasketnumb()"><img class="product__card__basket-btnbasket-img" src="@/assets/icons/shop-icon.svg" alt="">{{leng.baskettextcard}}</button>
    </div>

 </div>
  
</template>



<style>

</style>