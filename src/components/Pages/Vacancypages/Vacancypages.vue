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
     <div class="vacancypages" v-for="item in leng.vacancypages" :key="item">
       <h1 class="vacancypages__logo">{{ item.logo }}</h1>
       <p class="vacancypages__text-1">{{ item.text1 }}</p>
       <p class="vacancypages__text-1">{{ item.text2 }}</p>
       <p class="vacancypages__text-1">{{ item.text3 }} <span>{{ item.mail }}</span></p>
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
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>