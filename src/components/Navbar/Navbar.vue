<script setup>
import { useCounterStore } from "@/stores/counter";
import { useLeng } from "@/stores/Lenguage";
const leng = useLeng()
const Counter = useCounterStore();
</script>

<template>
  <nav class="nav">
    <div class="container">
      <div class="nav__left">
        <RouterLink
          :to="'/'+item.path"
          :class="item.class"
          v-for="item in leng.navbar.left"
          :key="item"
          >{{ item.name }}</RouterLink
        >
      </div>
      <div class="nav__right">
        <a href="tel:+998990000441"
          ><img src="@/assets/icons/PhoneWhite.svg" alt=""
        /></a>
        <a href="tel:+998990000441" class="nav__right-text-1" to="/"
          >+998(99) 000 04 41</a
        >
        <RouterLink class="nav__right-text-2" to="/prodayte"
          >{{ leng.prodOlcha }}</RouterLink
        >
        <div class="nav__right-language">
          <button class="nav__right-language-text-2" :class="{'active' :leng.uzleng}" @click="leng.lenguageUZB()">UZ</button>
          <button class="nav__right-language-text-3" :class="{'active' :leng.rusleng}" @click="leng.lenguageRUS()">Рус</button>
        </div>
      </div>
      <div class="size768">
        <a href="tel:+998990000441"
          ><img src="@/assets/icons/PhoneRed.svg" alt=""
        /></a>
        <h3 class="nav__logo"><RouterLink to="/">Olcha</RouterLink></h3>
        <div class="nav__burger" :class="{ 'activeburger': Counter.burgermodal }">
          <div
            class="nav__burger-btn"
            :class="{ 'activeburger': Counter.burgermodal }"
            @click="Counter.burgermodal = !Counter.burgermodal,Counter.basketmodal = false,Counter.categorymodal = false"
          >
            <span></span>
          </div>
        </div>
        <div
          class="nav__burger-navigation"
          :class="{ 'activemodal': Counter.burgermodal }"
        >
          <button
            class="nav__burger-navigation-closed"
            @click="Counter.burgermodal = false"
          >
            X
          </button>
          <h4 class="nav__logo">Olcha</h4>
          <RouterLink
            v-for="item in leng.navbar.burger"
            :key="item"
            :to="'/'+item.path"
          >
         <p  class="nav__burger-navigation-text"  @click="Counter.burgermodal = false">{{ item.name }}</p>
            
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>


<style>
</style>