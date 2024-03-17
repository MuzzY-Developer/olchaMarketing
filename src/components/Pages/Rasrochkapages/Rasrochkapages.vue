<script setup>
import { useLeng } from "@/stores/Lenguage";
import { useCounterStore } from "@/stores/counter";
const counter = useCounterStore()
const leng = useLeng()
function rec() {
  setTimeout(function () {
    counter.animate = true
  }, 100);
}
rec();
counter.animate = false
</script>

<template>
  <transition name="bounce">
  <section v-if="counter.animate">
    <div class="rasrochkapages">
     <p :class="item.class" v-for="item in leng.rasrochkapages.text1" :key="item">{{ item.text }}</p>  
      <img class="rasrochkapages__img-1" src="@/assets/images/rasrochka1.png" alt="">
      <img class="rasrochkapages__img-2" src="@/assets/images/rasrochka2.png" alt="">
      <p :class="item.class" v-for="item in leng.rasrochkapages.text2" :key="item">{{ item.text }}</p>
    </div>
  </section>
</transition>
</template>



<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>