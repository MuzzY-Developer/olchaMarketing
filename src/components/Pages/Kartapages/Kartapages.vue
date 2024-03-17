<script setup>
import { useLeng } from '@/stores/Lenguage';
import { useCounterProduct } from '@/stores/ProductsStore';
const CounterProduct = useCounterProduct()
const leng = useLeng()
import kartapages from './Kartapagesimgpath';
</script>



<template>
     <section>
        <div class="kartapages">
            <div class="kartapages-con">
                <h3>{{ leng.navigationtext }}</h3>
                <ul>
                    <li v-for="item in leng.navbar.left" :key="item">
                        <RouterLink :to="'/'+item.path">{{ item.name }}</RouterLink>
                    </li>
                     <li><RouterLink to="/">{{leng.prodOlcha}}</RouterLink></li>
                </ul>
            </div>
            <div class="kartapages-con">
                <h3>{{ leng.categorytext }}</h3>
                <ul>
                    <li v-for="item in CounterProduct.productcategories" :key="item.id">
                        <RouterLink :to="'/category/'+item">{{item}}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="kartapages-con">
                <h3>{{leng.ftinfo}}</h3>
                <ul>
                    <li v-for="item in leng.ftinform" :key="item">
                        <RouterLink :to="'/'+item.path">{{ item.name }}</RouterLink>
                    </li>
                </ul>
            </div>
            <div class="kartapages-con-l">
                <h3>{{leng.uslug}}</h3>
                <ul>
                    <li v-for="item in kartapages" :key="item">
                        <a :href="item.path"><img class="img" :src="item.images" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>


         <div class="test">
  
         </div>
     </section>
</template>


<style>

</style>