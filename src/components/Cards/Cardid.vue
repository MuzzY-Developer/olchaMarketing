<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCube, Pagination } from "swiper/modules";
import { useCounterStore } from "@/stores/counter";
import { useCounterProduct } from "@/stores/ProductsStore";
import { useLeng } from "@/stores/Lenguage";
const leng = useLeng()
const CounterStore = useCounterStore()
const CounterProduct = useCounterProduct()
import "swiper/css/navigation";
// ~~~~~~~~`~~~~~~~~~`

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
const modules = [EffectCube, Pagination];

const props = defineProps({
  info2: {
    type: Object,
    required: true,
  },
});

</script>


<template>
  <section class="product">
  <div class="product__cardid">
    <div class="product__cardid-left">
      <div class="product__cardid-left-corusel">
        <swiper
          loop
          :effect="'cube'"
          :grabCursor="true"
          :cubeEffect="{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }"
          :pagination="true"
          :modules="modules"
        >
          <swiper-slide  v-for="item in info2?.images" :key="item.id"
            ><img class="product__cardid-left-corusel-img" :src="item" alt=""
          /></swiper-slide>
         
        </swiper>
      </div>
     
      <h3>{{ info2?.title }}</h3>
      <p>{{ info2?.price }} $</p>
      <button v-show="CounterStore.basketbutton"
       @click="CounterStore.addToBasket(info2),CounterStore.totalproductprice(),CounterStore.totalbasketnumb()" class="product__cardid-basket">{{leng.baskettextcard}}</button>
    </div>
    <div class="product__cardid-right" v-for="text in  leng.cardid" :key="text">

      <div class="product__cardid-right-firma" v-for="item in leng.cardiddates" :key="item" v-show="info2?.brand == item.brandname">
        
        <div class="product__cardid-right-firma-1" >
          <h3>{{text.text1}}</h3>
          <img  class="product__cardid-right-firma-1-img"  :src="item.brandimg" alt="">
        </div>

        <div class="product__cardid-right-firma-2" >
        <h4>{{text.text2}}</h4>
        <p>{{item.brandosnavname}}</p>
      </div>

      </div>
       <div class="product__cardid-right-text">
        <p>{{text.text3}}</p> <span>{{ info2?.category }}</span>
       </div>
       <div class="product__cardid-right-text">
        <p>{{text.text4}}</p> <span> {{ info2?.description }}</span>
       </div>
       <div class="product__cardid-right-text">
        <p>{{text.text5}}</p> <span>{{ info2?.rating }}</span>
       </div>
       <div class="product__cardid-right-text">
        <p>{{text.text6}}</p> <span>{{ info2?.stock }}</span>
       </div>
    </div>
  </div>
</section>
</template>



<style>
</style>