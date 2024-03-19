<script setup>
import Card from "@/components/Cards/Card.vue";
import { useCounterProduct } from "@/stores/ProductsStore";
import { useLeng } from "@/stores/Lenguage";
import { onMounted, ref} from "vue";
import { useRoute, useRouter } from "vue-router";
const leng = useLeng();
const CounterProduct = useCounterProduct();
const route = useRoute();
const router = useRouter();
// var tester = ref(null || 12);
const currentPage = ref(+route.query.page || 1);

const width = ref(document.documentElement.clientWidth)

function onResize() {
  width.value = document.documentElement.clientWidth
}

onMounted(() => {
  window.addEventListener("resize", onResize)
})

const test = ref(window.innerWidth > 768 ? 12 : 4)

CounterProduct.getFetchProducts(currentPage.value * test.value - test.value, "", test.value);

function onClickHandler(page) {
  if (page === 1) {
    router.push(`/product`);
  } else {
    router.push(`/product/?page=${page}`);
  }
  CounterProduct.getFetchProducts(page * test.value - test.value, "", test.value);
  CounterProduct.testFn(page)
}
function notfound(){
  if(+route.query.page > 9 && test.value == 12){
    router.push(`/notfound`);
  } else if(+route.query.page > 25 && test.value == 4) {
    router.push(`/notfound`);
  }
}
notfound()

</script>

<template>
  <section>
    <vue-awesome-paginate
      :total-items="+CounterProduct.total"
      :items-per-page="test"
      :max-pages-shown="3"
      v-model="currentPage"
      :on-click="onClickHandler"
      class="pagination"
    >
      <template #prev-button>
        <span>
          <img class="icones" src="@/assets/icons/Leftstrelka.svg" alt="" />
        </span>
      </template>
      <template #next-button>
        <span>
          <img class="icones" src="@/assets/icons/Rightstrelka.svg" alt="" />
        </span>
      </template>
    </vue-awesome-paginate>
    <Empty v-if="!CounterProduct.product.length">
      <section>
    <div class="notfound">
    <img src="@/assets/images/sorry.png" alt="">
       <div class="notfound__con" v-for="item in leng.nodfoundpages" :key="item">
        <h3 class="notfound__con-title">
         {{ leng.notfoundpgtext }}
        </h3>
        <p class="notfound__con-subtitle"> {{ item.text2 }}</p>
        <RouterLink to="/">{{ item.text3 }}</RouterLink>
       </div>
    </div>
  </section>
      </Empty>
    <div class="pagination-cards">
      <Card
        v-for="item in CounterProduct.product"
        :key="item.id"
        :info1="item"
      />
    </div>
  </section>
</template>

<style></style>
