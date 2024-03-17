import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useLeng } from "./Lenguage";
export const useCounterStore = defineStore("counter", {
  state: () => ({
    bgblack: false,
    search: "",
    // searchmodal: false,
    burgermodal: false,
    categorymodal: false,
    basketmodal: false,
    accountemodal: false,
    basketProduct: [],
    totalprice: 0,
    totalbasketamount: 0,
    mada: null,
    animate: false,
    login: "",
    parol: "",
    name: "Xamidulla",
    password: "Khamid1995",
    leng: useLeng(),
    text: "",
    eyepass: "password",
    eyeimg1: true,
    eyeimg2: false,
    accounttrue: true,
    accountfalse: false,
    accountuseractive: true,
    accountusernonactive: false,
    timeS: 59,
    timeM: 59,
    timeH: 13,
    basketuseractive: false,
    basketusernonactive: true,
    basketbutton: false,
    searchmodal:false
  }),
  actions: {
    rec() {
      if (this.timeS > 0) {
        this.timeS--;
      } else if (this.timeS == 0) {
        this.timeS = 59;
        this.timeM--;
      }
      if (this.timeM == -1) {
        this.timeH--;
        this.timeM = 59;
      }
      if (this.timeH == -2) {
        this.timeH++;
        this.timeH = -1;
      }
      if (this.timeH == -1) {
        this.timeM = 0;
        this.timeH = 0;
      }
      if (this.timeM == 0) {
        this.timeS++;
        this.timeS = 0;
      }
    },
    searchproduct(text){
       this.search = text
       console.log(text)
       if(text.length > 0){
          this.searchmodal = true
       } else{
          this.searchmodal = false
       }
    },
    addToBasket(tovar) {
      console.log(tovar)
      const idbasket = this.basketProduct.find((item) => item.id == tovar.id);
      if (idbasket?.id !== tovar.id) {
        this.basketProduct.push({
          ...tovar,
          amount: 1,
          get totalSum() {
            return this.price * this.amount;
          },
        });
      } else {
        this.basketProduct.forEach((item) => {
          if (item.id == tovar.id) {
            item.amount++;
          }
        });
      }
    },
    
    
      
    deleteTobasket(id, totalSum, amount) {
      const productId = this.basketProduct?.find((item) => item.id == id);
      const productIndex = this.basketProduct?.findIndex((item) => item.id == id);
      if (productId.id == id) {
        this.basketProduct.splice(productIndex, 1);
      }
      this.totalbasketamount -= amount;
      this.totalprice -= totalSum;
    },
    
    
    
    
    
    
    
    
    
    
    deleteTobasketAll() {
      (this.basketProduct = []),
        (this.totalprice = 0),
        (this.totalbasketamount = 0);
    },
    
    totalproductprice() {
      let num = 0;
      this.basketProduct.forEach((element) => {
        this.totalprice = num += element.totalSum;
      });
    },
    totalbasketnumb() {
      let nums = 0;
      this.basketProduct.forEach((element) => {
        this.totalbasketamount = nums += element.amount;
      });
    },
    getLogin(query) {
      this.login = query;
    },
    getParol(query) {
      this.parol = query;
    },
    loginparol() {
      if (
        this.login.length == this.name.length &&
        this.parol == this.password
      ) {
        (this.login = ""),
          (this.parol = ""),
          (this.accountemodal = false),
          (this.accountfalse = false);
        (this.accounttrue = true),
          (this.basketuseractive = true),
          (this.basketusernonactive = false);
        (this.basketbutton = true),
          (this.accountuseractive = false),
          (this.accountusernonactive = true),
          document.body.classList.remove("activebody");
      } else {
        this.accountemodal = true;
        this.accountfalse = true;
        this.accounttrue = false;
        (this.basketuseractive = true), (this.basketusernonactive = false);
        (this.basketuseractive = false),
          (this.basketusernonactive = true),
          (this.basketbutton = false),
          (this.accountuseractive = true),
          (this.accountusernonactive = false);
      }
    },
    exituser() {
      this.accountemodal = false;
      this.accountfalse = true;
      this.accounttrue = false;
      (this.basketuseractive = true), (this.basketusernonactive = false);
      (this.basketuseractive = false),
        (this.basketusernonactive = true),
        (this.basketbutton = false),
        (this.accountuseractive = true),
        (this.accountusernonactive = false);
    },
    eyeOpenClosed() {
      if (this.eyepass == "password") {
        this.eyepass = "text";
        this.eyeimg1 = false;
        this.eyeimg2 = true;
      } else {
        this.eyepass = "password";
        this.eyeimg1 = true;
        this.eyeimg2 = false;
      }
    },

    bodyhiddenopen() {
      document.body.classList.add("activebody");
    },
    bodyhiddenclosed() {
      document.body.classList.remove("activebody");
    },

    // addToBasket(tovar){
    //    const idbasket = this.basketProduct.find((item) => item.id == tovar.id)
    //  if(idbasket?.id !== tovar.id){
    //   this.basketProduct.push(tovar)
    //  }
    //  console.log(this.basketProduct)
    //    },

    // deleteTobasket(id){
    //     const index = this.basketProduct.findIndex((item) => {
    //       return item.id == id;
    //      })

    //   this.basketProduct.splice(index, 1)
    //   this.total -= id.price
    //    },
    //    addpricetovar(item){

    //       this.total +=item
    //    },

    // totalAmount(){
    //    let num = 0
    //   this.basketProduct.forEach(element => {
    //    this.total = num+=element.price
    //  });
    //  },
  },
  persist: true,
});
