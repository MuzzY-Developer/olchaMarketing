<script setup>
import { useLeng } from "@/stores/Lenguage"
const leng = useLeng()

</script>

<template>
       <div class="footer">
        <div class="container">
            <div class="footer__appstores">
                 <div class="footer__appstores-con-1">
                    <div class="footer__appstores-con-1-text">
                        {{ leng.ftappstoretext }}
                    </div>
                    <div class="footer__appstores-con-1-appservice">
                       <a  href="https://apps.apple.com/uz/app/olcha/id1551492785" class="footer__appstores-con-1-appservice-btn"><img src="@/assets/icons/appstore.svg" alt="" /></a>
                       <a  href="https://play.google.com/store/apps/developer?id=Olcha+LLC&pli=1" class="footer__appstores-con-1-appservice-btn"><img src="@/assets/icons/googleplay.svg" alt="" /></a>
                       <a  href="https://appgallery.huawei.com/app/C105125705" class="footer__appstores-con-1-appservice-btn"><img src="@/assets/icons/appgallery.svg" alt="" /></a>
                    </div>
                 </div>
                 <img class="footer__appstores-img" src="@/assets/icons/phonefooter.webp" alt="">
            </div>
            <div class="footer__inform">
                 <div class="footer__inform-con-1">
                    <h3 class="footer__inform-con-1-logotxt">Olcha</h3>
                     <ul>
                        <li>{{ leng.ftphone }}</li>
                        <li class="tel"><a href="tel:+998 (71) 202 202 1">+998 (71) 202 202 1</a></li>
                        <li>{{leng.ftadress}}</li>
                        <li>info@olcha.uz</li>
                     </ul>
                 </div>
                 <div class="footer__inform-con-2-info">
                    <h3 class="footer__inform-con-2-info-infotxt">{{leng.ftinfo}}</h3>
                     <ul>
                        <li v-for="item in leng.ftinform" :key="item">
                        <RouterLink :to="'/'+item.path" >{{ item.name }} </RouterLink></li>
                     </ul>
                 </div>
                 <div class="footer__inform-con-3-paymestores">
                  <a href="https://uzumbank.uz/ru" class="footer__inform-con-3-paymestores-btn" ><img src="@/assets/icons/apelsin.png" alt="" /></a>
                  <a href="https://payme.uz/home/main" class="footer__inform-con-3-paymestores-btn" ><img src="@/assets/icons/payme.png" alt="" /></a>
                  <a href="https://app.paynet.uz/" class="footer__inform-con-3-paymestores-btn"><img src="@/assets/icons/paynet.png" alt="" /></a>
                  <a href="https://uzcard.uz/ru" class="footer__inform-con-3-paymestores-btn"><img src="@/assets/icons/uzcard.png" alt="" /></a>
                  <a href="https://click.uz/ru" class="footer__inform-con-3-paymestores-btn"><img src="@/assets/icons/click.png" alt="" /></a>
                  <a href="https://cis.visa.com/visa-in-uzbekistan.html" class="footer__inform-con-3-paymestores-btn"><img src="@/assets/icons/visa.png" alt="" /></a>
                 </div>
            </div>
        </div>
       </div>
</template>


<style>

</style>