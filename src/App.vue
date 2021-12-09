<template>
  <div>
    <div class="cart">Cart ({{ cart }})</div>
    <product
      v-for="product in products"
      :key="product.id"
      :product="product"
      :premium="true"
    ></product>
  </div>
</template>

<script lang="ts">
import Product from "./components/Product.vue";
import ProductService from "./services/products.service";

export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    return {
      products: ProductService.getProducts(),
      cart: 0,
      addToCart() {
        this.cart++;
      },
    };
  },
};
</script>

<style>
.cart {
  color: GREEN;
  float: right;
  font-size: 2rem;
  position: relative;
  top: 20px;
  right: 30px;
}
</style>
