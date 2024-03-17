<script setup>
import SwiperIntro from "@/components/Swiper/SwiperIntro.vue";
import SwiperAksiya from "@/components/Swiper/SwiperAksiya.vue";
import { useCounterProduct } from "@/stores/ProductsStore";
import { useCounterStore } from "@/stores/counter";
const CounterStore = useCounterStore()
import { ref } from "vue";
import { useLeng } from "@/stores/Lenguage";
const leng =useLeng()
const CounterProduct = useCounterProduct();
var random = Math.floor(Math.random()*95) +1;
CounterProduct.getFetchProductsAksiya(random);


</script>


<template>
  <section>
    <div class="HomeIntro">
      <SwiperIntro :intro="CounterProduct.productpopular" />
      <div class="HomeIntro__aksiya">
        <div class="HomeIntro__aksiya-con">
          <div class="HomeIntro__aksiya-con-title"><h3>{{leng.skidkatext1}} <span>{{leng.skidkatext2}}</span></h3></div>
          <div class="HomeIntro__aksiya-con-clock">
            <p>{{CounterStore.timeH }}</p>
            <span>:</span>
            <p>{{CounterStore.timeM }}</p>
            <span>:</span>
            <p>{{CounterStore.timeS }}</p>
          </div>
        </div>

        <SwiperAksiya :aksiya="CounterProduct.productaksiya" />
      </div>
    </div>
  </section>
</template>



<style>
</style>