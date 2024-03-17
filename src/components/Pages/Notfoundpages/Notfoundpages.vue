<script setup>
import { useLeng } from '@/stores/Lenguage';
const leng = useLeng()
</script>


<template>
  <section>
    <div class="notfound">
    <img src="@/assets/images/404.png" alt="">
       <div class="notfound__con" v-for="item in leng.nodfoundpages" :key="item">
        <h3 class="notfound__con-title">
            {{ item.text1 }}
        </h3>
        <p class="notfound__con-subtitle"> {{ item.text2 }}</p>
        <RouterLink to="/">{{ item.text3 }}</RouterLink>
       </div>
    </div>
  </section>
</template>

<style>

</style>