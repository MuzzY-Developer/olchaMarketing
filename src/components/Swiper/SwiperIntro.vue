<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation,Pagination} from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
const modules = [Navigation,Autoplay,Pagination];


const props = defineProps({
  intro:{
    type:Object,
    required:true
  }
})







</script>



<template>
  <swiper 
    loop
    :pagination="true"
    :navigation="true"
    :slides-per-view="1"
    :space-between="80"
    :modules="modules"
    :autoplay="{
      delay: 2500
    }"
    class="swiperIntro"
    >
      <swiper-slide v-for="item in intro" :key="item.id"> 
        <RouterLink :to="'/product/'+ item.id" ><img class="swiperIntro-img" :src="item.images[0]" alt=""></RouterLink>
      </swiper-slide>
  </swiper>
</template>



<style>
</style>