<template>
  <div class="product">
    <div class="product-details">
      <div class="product-image">
        <img alt="Product logo image." :src="getImage(product.image)" />
      </div>
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p v-if="product.inventory > 10">In Stock</p>
        <p v-else-if="product.inventory <= 10 && product.inventory > 0">
          Almost sold out
        </p>
        <p v-else>Out of Stock</p>

        <ul>
          <li v-for="detail in product.details" :key="detail">
            {{ detail }}
          </li>
        </ul>

        <div class="variants">
          <div
            v-for="variant in product.variants"
            :key="variant.id"
            @mouseover="$parent.updateImage(productIndex, variant.image)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          />
        </div>

        <button
          class="button"
          :class="{ disabledButton: product.inventory < 1 }"
          :disabled="product.inventory < 1"
          @click="$parent.addToCart"
        >
          Add to Cart
        </button>
      </div>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { ProductType } from "../utils/types/CommonTypes";

export default {
  name: "Product",
  props: {
    product: {
      type: Object as PropType<ProductType>,
    },
    productIndex: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      getImage: (imagePath: string): string => {
        return require(`../${imagePath}`);
      },
    };
  },
};
</script>

<style lang="css">
.product .product-details {
  display: flex;
  flex-direction: row;
}

.product .product-image {
  width: 160px;
  margin-right: 48px;
  position: relative;
}

.product .product-image img {
  width: 180px;
  max-width: 100%;
  vertical-align: middle;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
}

.product .variants {
  text-align: center;
}

.product .color-circle {
  width: 50px;
  height: 50px;
  margin-top: 8px;
  border: 2px solid #d8d8d8;
  border-radius: 50%;
  cursor: pointer;
}

.product button.disabledButton {
  background-color: #ececec;
  color: black;
  cursor: not-allowed;
}

.product .button {
  background: #35495e;
  color: white;
  font-size: 1rem;
  padding: 20px;
  border: 1px solid white;
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  bottom: 108px;
  left: 170px;
}
</style>
