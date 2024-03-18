<script setup>
import { useCounterStore } from "./stores/counter";
const CounterStore = useCounterStore()
import Header from "./components/Layouts/Headerlayouts.vue";
import Main from "./components/Layouts/Mainlayouts.vue";
import Footer from "./components/Layouts/Footerlayouts.vue";
window.addEventListener('scroll',function(){
  var scroll = document.querySelector('.wrapper__btn-top');
  scroll.classList.toggle("active", window.scrollY>500)
})


</script>

<template>
  <div class="wrapper">

   <button class="wrapper__btn-top" @click="CounterStore.scrollTop()">&#8593</button>
      <Header/>
      <Main/>
      <Footer/>
  </div>
</template>