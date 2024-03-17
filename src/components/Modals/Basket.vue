<script setup>
import { useCounterStore } from '@/stores/counter';
import { useLeng } from '@/stores/Lenguage';
import { ref } from 'vue';


const leng = useLeng()
const CounterStore = useCounterStore() 

function count(item){
  if(item.amount == 1){
    CounterStore.deleteTobasket(item.id,item.totalSum,item.amount)
  } else{
     item.amount--
     CounterStore.totalbasketamount-=1
  }
};

CounterStore.totalproductprice()

</script>


<template>
  <div class="header__basket-modal" :class="{ 'basketmodal': CounterStore.basketmodal }">
        <div class="header__basket-modal-top">
          <button @click="CounterStore.basketmodal = false">X</button>
        </div>
        <div class="header__basket-modal-center" >
          <div class="header__basket-modal-center-card"
            v-for="item in CounterStore.basketProduct"
            :key="item" :id="item.id">
            <img
              class="header__basket-modal-center-card-img"
              :src="item.thumbnail"
              alt=""
            />
            <h4 class="header__basket-modal-center-card-title">
              {{ item.title }}
            </h4>
            <p class="header__basket-modal-center-card-price">
              {{ item.totalSum }}
            </p>
            <button class="header__basket-modal-center-card-btn"  @click="count(item),CounterStore.totalproductprice()">-</button>
            <span>{{ item.amount }}</span>
            <button class="header__basket-modal-center-card-btn"  @click="item.amount++,CounterStore.totalproductprice(),CounterStore.totalbasketamount+=1">+</button>
            <button class="header__basket-modal-center-card-dell" @click="CounterStore.deleteTobasket(item.id,item.totalSum,item.amount)">
             x
            </button>
          </div>
        </div>
        <div class="header__basket-modal-bottom">
          <button>{{ leng.hdtoorder }}</button>
          <button @click="CounterStore.deleteTobasketAll()">Очистить</button>
          <span>{{ CounterStore.totalprice}} $</span>
        </div>
      </div>


</template>



<style>

</style>