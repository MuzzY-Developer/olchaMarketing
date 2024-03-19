
import {
    defineStore
} from 'pinia'
import burgerNavigationRUS from "@/components/Navbar/NavRUS";
import burgerNavigationUZB from "@/components/Navbar/NavUZB";
import informatsiyaRUS from '@/components/Layouts/FooterinformatsiyaRUS';
import informatsiyaUZB from '@/components/Layouts/FooterinformatsiyaUZB';
import companypagesRUS from '@/components/Pages/Companypages/CompanypagesRUS';
import companypagesUZB from '@/components/Pages/Companypages/CompanypagesUZB';
import vacancypagesRUS from '@/components/Pages/Vacancypages/VacancypagesRUS';
import vacancypagesUZB from '@/components/Pages/Vacancypages/VacancypagesUZB';
import vozvratpagesRUS from '@/components/Pages/Vozvratpages/VozvratpagesRUS';
import vozvratpagesUZB from '@/components/Pages/Vozvratpages/VozvratpagesUZB';
import rasrochkapagesRUS from '@/components/Pages/Rasrochkapages/RasrochkapagesRUS';
import rasrochkapagesUZB from '@/components/Pages/Rasrochkapages/RasrochkapagesUZB';
import dostavkapagesRUS from '@/components/Pages/Dostavkapages/DostavkapagesRUS';
import dostavkapagesUZB from '@/components/Pages/Dostavkapages/DostavkapagesUZB';
import ecofriendlypagesRUS from '@/components/Pages/Ecofriendlypages/EcofriendlypagesRUS';
import ecofriendlypagesUZB from '@/components/Pages/Ecofriendlypages/EcofriendlypagesUZB';
import notfoundpagesRUS from '@/components/Pages/Notfoundpages/NotfoundpagesRUS';
import notfoundpagesUZB from '@/components/Pages/Notfoundpages/NotfoundpagesUZB';
import razigrpagesRUS from '@/components/Pages/Razigrpages/RazigrpagesRUS';
import razigrpagesUZB from '@/components/Pages/Razigrpages/RazigrpagesUZB';
import prodavaytepagesRUS from '@/components/Pages/Prodavaytepages/ProdavaytepagesRUS';
import prodavaytepagesUZB from '@/components/Pages/Prodavaytepages/ProdavaytepagesUZB';
import accountRUS from '@/components/Modals/AccountRUS';
import accountUZB from '@/components/Modals/AccountUZB';
import cardidRUS from '@/components/Cards/CardidRUS';
import cardidUZB from '@/components/Cards/CardidUZB';
import cardiddata from '@/components/Cards/Cardiddates';

export const useLeng = defineStore('useleng', {

    state: () => ({
        //    ~~~~~~~~~~~~~~~~~~~~~~~~~~~Navbar
        navbar: burgerNavigationRUS,
        prodOlcha: "Продавайте на Olcha",
        uzleng:false,
        rusleng:true,
        //    ~~~~~~~~~~~~~~~~~~~~~~~~~~~Header
        hdcatalog: "Каталог",
        hdbasket: "Корзина",
        hdaccount: "Войти",
        hdexit:"Выйти",
        hdtoorder:"Заказать",
        hdclear:"Очистить",
        hdpoisktext:"Поиск по каталогу",
       
        //    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~Card
        pricetextcard:"Цена:",
        abouttextcard:"Подробно",
        categorytextcard:"Категория:",
        baskettextcard:"В корзину",
        // ~~~~~~~~~~~~~~~~~~~~~~~~~~~Cardid
        cardiddates:cardiddata,
        cardid: cardidRUS,
        //~~~~~~~~~~~~~~~Accounte~~~~
        account:accountRUS,
        //~~~~~~~~~~~карта сайта
        navigationtext: "Навигация",
        categorytext:"Категория",
        uslug:"услуги",
       //~~~~~~~~~~~~~sortirovka
        sortautotext:"По итогу",
        sortratingtext:"По рейтингу",
        sortpricetext:"По цену",
        //~~~~~~~~~~~~~~~~~~~~~~~Homesections
        skidkatext1:"Товар дня:",
        skidkatext2:"Скидка 30%",
        smartphonetext:"Смартфоны",
        populartext:"Попульярные",
        //~~~~~~~~~~~PAGES ALL~~~~~~~~~~
        companypages: companypagesRUS,
        vacancypages: vacancypagesRUS,
        vozvratpages: vozvratpagesRUS,
        rasrochkapages: rasrochkapagesRUS,
        dostavkapages:dostavkapagesRUS,
        ecofriendlypages: ecofriendlypagesRUS,
        razigrpages:razigrpagesRUS,
        prodavaytepages:prodavaytepagesRUS,
         // nodfound//
        nodfoundpages:notfoundpagesRUS,
        notfoundpgtext:"извините по вашему запросу ничего не найдено",
        // footer~~~~~~~~~~~~~~~~~~~
        ftappstoretext:"Наше мобильное приложение доступно в AppGallery, App store и Google play",

        ftphone: "Телефон поддержки",
        ftinform: informatsiyaRUS,
        ftinfo: "Информация",
        ftadress: "Козитарнов, Ташкент",

    }),

    actions: {
        lenguageUZB() {
                this.uzleng =true,
                this.rusleng =false,
                this.navbar = burgerNavigationUZB,
                this.prodOlcha = "Olcha-da soting"
                this.hdcatalog = "Katalog",
                this.hdbasket = "Savat",
                this.hdaccount = "Kirish",
                this.hdexit="Chiqish",
                this.hdclear="Tozalash"
                this.hdtoorder="Buyurtma",
                this.hdpoisktext="Katalog bo'yicha qidirish",
                this.pricetextcard="Narxi:",
                this.abouttextcard="Batafsil",
                this.categorytextcard="Kategoriya:",
                this.baskettextcard="Savatga",
                this.skidkatext1="Kunning tovarlari:",
                this.skidkatext2="30% chegirma",
                this.smartphonetext="Smartfonlar",
                this.populartext="Mashhur",
                this.companypages= companypagesUZB,
                this.vacancypages = vacancypagesUZB,
                this.vozvratpages = vozvratpagesUZB,
                this.rasrochkapages= rasrochkapagesUZB,
                this.dostavkapages = dostavkapagesUZB,
                this.ecofriendlypages = ecofriendlypagesUZB,
                this.razigrpages= razigrpagesUZB,
                this.prodavaytepages =prodavaytepagesUZB,
                this.nodfoundpages = notfoundpagesUZB,
                this.notfoundpgtext="Sizning so'rovingiz bo'yicha hich narsa topilmadi",
                this.cardid =cardidUZB,
                this.account = accountUZB,
                this.navigationtext ="Navigatsiya",
                this.categorytext="Kategoriya",
                this.uslug="Xizmatlar",
                this.sortautotext="Natijada",
                this.sortratingtext="Reytingdan",
                this.sortpricetext="Narxdan",
                this.ftappstoretext ="Bizning mobil ilovamiz AppGallery, App store va Google play-da mavjud",
                this.ftphone = "Qo'llab-quvvatlash telefoni",
                this.ftadress = "Qozitanrov Toshkent",
                this.ftinfo = "Ma'lumot",
                this.ftinform = informatsiyaUZB

        },
        lenguageRUS() {
                this.uzleng =false,
                this.rusleng =true,
                this.navbar = burgerNavigationRUS,
                this.prodOlcha = "Продавайте на Olcha"
                this.hdcatalog = "Каталог",
                this.hdbasket = "Корзина",
                this.hdaccount = "Войти",
                this.hdexit="Выйти",
                this.hdtoorder="Заказать",
                this.hdclear="Очистить",
                this.hdpoisktext="Поиск по каталогу",
                this.pricetextcard="Цена:",
                this.abouttextcard="Подробно",
                this.categorytextcard="Категория:",
                this.baskettextcard="В корзину",
                this.skidkatext1="Товар дня:",
                this.skidkatext2="Скидка 30%",
                this.smartphonetext="Смартфоны",
                this.populartext="Попульярные",
                this.companypages = companypagesRUS,
                this.vacancypages = vacancypagesRUS,
                this.vozvratpages = vozvratpagesRUS,
                this.rasrochkapages= rasrochkapagesRUS,
                this.dostavkapages = dostavkapagesRUS,
                this.ecofriendlypages = ecofriendlypagesRUS,
                this.razigrpages= razigrpagesRUS,
                this.prodavaytepages =prodavaytepagesRUS,
                this.nodfoundpages = notfoundpagesRUS,
                this.notfoundpgtext="извините по вашему запросу ничего не найдено",
                this.cardid =cardidRUS,
                this.account = accountRUS,
                this.navigationtext ="Навигация",
                this.categorytext="Категория",
                this.uslug="услуги",
                this.sortautotext="По итогу",
                this.sortratingtext="По рейтингу",
                this.sortpricetext="По цену",
                this.ftappstoretext ="Наше мобильное приложение доступно в AppGallery, App store и Google play",
                this.ftphone = "Телефон поддержки",
                this.ftadress = "Козитарнов, Ташкент",
                this.ftinfo = "Информация",
                this.ftinform = informatsiyaRUS

        }


    }
})