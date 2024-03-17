<template>
  <main @click="CounterStore.searchmodal = false" >
  
    <RouterView />
  </main>
</template>
<script setup>
import { useCounterStore } from "@/stores/counter"
const CounterStore = useCounterStore()

</script>