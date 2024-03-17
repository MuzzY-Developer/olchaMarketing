import axiosClient from "./аxiosClient";

const apiProducts = {
  getProduct(skip, search, limit) {
    const url = `products/search?q=${search}&skip=${skip}&limit=${limit}`;
    return axiosClient.get(url);
  },
  getProductAll(skip,limit) {
    const url = `products?skip=${skip}&limit=${limit}`;
    return axiosClient.get(url);
  },
//   getSearch(search) {
//     const url = `products/search?q=${search}`;
//     return axiosClient.get(url);
//   },
  getProductid(numb) {
    const url = `products/${numb}`;
    return axiosClient.get(url);
  },
  getProductcategories() {
    const url = `products/categories/`;
    return axiosClient.get(url);
  },
  getProductcategory(category) {
    const url = `products/category/${category}`;
    return axiosClient.get(url);
  },

  getProductsmartphones() {
    const url = `products/category/smartphones`;
    return axiosClient.get(url);
  },
  getProductpopular(skip, limit) {
    const url = `products?skip=${skip}&limit=${limit}`;
    return axiosClient.get(url);
  },
};
export default apiProducts;
