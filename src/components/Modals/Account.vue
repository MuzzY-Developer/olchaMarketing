<script setup>
import { useCounterStore } from '@/stores/counter';
import { useLeng } from '@/stores/Lenguage';
import { ref } from 'vue';
const CounterStore = useCounterStore()
const leng = useLeng()

</script>



<template>
    <div class="account" v-show="CounterStore.accountemodal">
        <div class="account-bg"  @click="CounterStore.accountemodal = false,CounterStore.bodyhiddenclosed(),
        CounterStore.accountfalse=false,CounterStore.accounttrue= true"></div>
        <div class="account__container" v-for="item in leng.account" :key="item">
            <span class="account__container-delete" @click="CounterStore.accountemodal = false,CounterStore.bodyhiddenclosed(), CounterStore.accountfalse=false,CounterStore.accounttrue= true">X</span>
           <h1 class="account__container-title">{{item.text1}}</h1>
           <input class="account__container-input-1"   type="text" @input="CounterStore.getLogin($event.target.value)" :placeholder="item.text2place">
        
           <div  class="account__container-con">
            <input class="account__container-con-input-1"  :type="CounterStore.eyepass" @input="CounterStore.getParol($event.target.value)" :placeholder="item.text4place">
            <img @click="CounterStore.eyeOpenClosed()" class="account__container-con-img" v-show="CounterStore.eyeimg1" src="@/assets/icons/eye1.svg" alt="">
            <img @click="CounterStore.eyeOpenClosed()" class="account__container-con-img" v-show="CounterStore.eyeimg2" src="@/assets/icons/eye2.svg" alt="">
           </div>
          
           <p class="account__container-text-1" v-show="CounterStore.accounttrue">{{item.text3}}</p>
           <p class="account__container-text-2" v-show="CounterStore.accountfalse">{{item.text5}}</p>
           <button class="account__container-btn" @click="CounterStore.loginparol()">{{item.text1}}</button>
        </div>
    </div>

</template>


<style>

</style>