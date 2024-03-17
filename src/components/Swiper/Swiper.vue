<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import Card from '@/components/Cards/Card.vue';
import { Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation,];
const breakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 60,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 70,
  },

  992: {
    slidesPerView: 3,
    spaceBetween: 70,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 80,
  },
  1240: {
    slidesPerView: 3,
    spaceBetween: 80,
  },
  1440: {
    slidesPerView: 4,
    spaceBetween: 60,
  },
};
const props = defineProps({
   smartphones :{
        type:Object,
        required:true
    }
})
</script>



<template>
  <swiper
    class="corusel-1"
    :slides-per-view="1"
    :space-between="80"
    :breakpoints="breakpoints"
    :navigation="true"
    :modules="modules"

  >
    <swiper-slide class="corusel-slide" v-for="item in smartphones" :key="item.id">
        <Card :info1="item" />
    </swiper-slide>
    
  </swiper>
</template>



<style>
</style>