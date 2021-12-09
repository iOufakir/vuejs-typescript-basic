<template>
  <div>
    <div class="cart">Cart ({{ cart.length }})</div>
    <product
      v-for="product in products"
      :key="product.id"
      :product="product"
      :premium="true"
      @add-to-cart="addToCartEvent"
    ></product>
  </div>
</template>

<script lang="ts">
import Product from "./components/Product.vue";
import ProductService from "./services/products.service";
import { Cart } from "./utils/types/CommonTypes";

export default {
  name: "App",
  components: {
    Product,
  },
  data() {
    const cart: Array<Cart> = [];
    return {
      products: ProductService.getProducts(),
      cart,
    };
  },
  methods: {
    addToCartEvent(cart: Cart) {
      (this as any).cart.push(cart);
    },
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
