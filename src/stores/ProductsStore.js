import apiProducts from "@/helpers/api/api";
import { defineStore } from "pinia";

export const useCounterProduct = defineStore("product", {
  state: () => ({
    product: null,
    productall: null,
    productid: null,
    productcategories: null,
    productcategory: null,
    productsmartphones: null,
    productpopular: null,
    productaksiya: null,
    total: (null || 100),
    sortpoputext: "По итогу",
    page: 1
  }),
  actions: {
    async getFetchProducts(skip = 0, search = "", limit=12) {
      try {
        const res = await apiProducts.getProduct(skip, search, limit);
        this.product = res.products;
        this.total = res.total;
      } catch (error) {
        console.error(error);
      }
    },
    testFn(page) {
      this.page = page
    },

    async getFetchProductsAll(skip = 0, limit = 100) {
      try {
        const res = await apiProducts.getProductAll(skip = 0, limit = 100);
        this.productall = res.products;    
      } catch (error) {
        console.error(error);
      }
    },

    async getFetchProductsid(numb) {
      try {
        const res = await apiProducts.getProductid(numb);
        this.productid = res;
      } catch (error) {
        console.error(error);
      }
    },

    async getFetchProductsCategories() {
      try {
        const res = await apiProducts.getProductcategories();
        this.productcategories = res;
      } catch (error) {
        console.error(error);
      }
    },

    async getFetchProductsCategory(category) {
      try {
        const res = await apiProducts.getProductcategory(category);
        this.productcategory = res.products;
      } catch (error) {
        console.error(error);
      }
    },

    async getFetchProductsSmartphones() {
      try {
        const res = await apiProducts.getProductsmartphones();
        this.productsmartphones = res.products;
      } catch (error) {
        console.error(error);
      }
    },

    async getFetchProductsPopular(skip = 0, limit = 10) {
      try {
        const res = await apiProducts.getProductpopular(skip, limit);
        this.productpopular = res.products;
        this.productpopular.sort((a, b) => {
          return b.stock - a.stock;
        });
      } catch (error) {
        console.error(error);
      }
    },

    async getFetchProductsAksiya(skip, limit = 5) {
      try {
        const res = await apiProducts.getProductpopular(skip, limit);
        this.productaksiya = res.products;
        this.productaksiya.sort((a, b) => {
          return b.stock - a.stock;
        });
      } catch (error) {
        console.error(error);
      }
    },

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~function rating~~~~~~~~~~~~~~~~~~~~~

    sortdefauld() {
      this.productcategory?.sort((a, b) => {
        return a.id - b.id;
      });

    },
    sortReyting() {
      this.productcategory.sort((a, b) => {
        return b.rating - a.rating;
      });

    },
    sortPrice() {
      this.productcategory.sort((a, b) => {
        if (a.price > b.price) {

          return -1;
        }
        return 1;
      });
    },
  },
  persist: true,
});
