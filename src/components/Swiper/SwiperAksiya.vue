<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay} from 'swiper/modules';
import 'swiper/css'

const modules = [Autoplay];
const props = defineProps({
  aksiya:{
    type:Object,
    required:true
  }
})


</script>



<template>
  <swiper 
  class="swiperaksiya"
    loop
    :slides-per-view="1"
    :space-between="80"
    :modules="modules"
    :autoplay="{
      delay: 2500
    }"
    >
    <swiper-slide v-for="item in aksiya" :key="item?.id"> 
        <RouterLink :to="'/product/'+ item.id" ><img class="swiperIntro-img" :src="item.images[0]" alt=""></RouterLink>
      </swiper-slide>
  </swiper>
</template>



<style>
</style>