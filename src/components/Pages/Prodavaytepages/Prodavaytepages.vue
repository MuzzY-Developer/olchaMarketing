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
counter.animate = false;
</script>


<template>
     <transition name="bounce">
 <section v-if="counter.animate">
    <div class="prodavaytepages" >
        <div class="prodavaytepages-con-1" v-for="item in leng.prodavaytepages" :key="item">
            <h3 class="prodavaytepages-con-1-logo">
                {{ item.text1 }}
            </h3>
            <p class="prodavaytepages-con-1-text-1"> {{ item.text2 }}</p>
            <button class="prodavaytepages-con-1-btn">{{ item.text3 }}</button>
            <img class="prodavaytepages-con-1-img" src="@/assets/images/prodayteimg.png" alt="">
        </div>  
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