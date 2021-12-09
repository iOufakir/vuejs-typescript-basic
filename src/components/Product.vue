<template>
  <div class="product">
    <div class="product-details">
      <div class="product-image">
        <img alt="Product logo image." :src="getImage(image)" />
      </div>
      <div class="product-info">
        <h1>{{ name }}</h1>

        <p v-if="quantity > 10">In Stock</p>
        <p v-else-if="quantity <= 10 && quantity > 0">Almost sold out</p>
        <p v-else>Out of Stock</p>

        <p>
          Shipping: <span :style="{ fontWeight: 'bold' }">{{ shipping }}</span>
        </p>

        <ul>
          <li v-for="detail in product.details" :key="detail">
            {{ detail }}
          </li>
        </ul>

        <div class="variants">
          <div
            v-for="(variant, index) in product.variants"
            :key="variant.id"
            @mouseover="updateVariant(index)"
            class="color-circle"
            :style="{ backgroundColor: variant.color }"
          />
        </div>

        <button
          class="button"
          :class="{ disabledButton: quantity < 1 }"
          :disabled="quantity < 1"
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
import { computed, PropType } from "vue";
import { ProductType } from "../utils/types/CommonTypes";

export default {
  name: "Product",
  props: {
    product: {
      type: Object as PropType<ProductType>,
    },
    premium: {
      type: Boolean,
      required: true,
    },
  },
  data(props: any) {
    const self = this as any;
    const product = props.product;

    const name = computed(() => product.brand + " - " + product.name);

    const image = computed(() => {
      const variantIndex = self.variantIndex;
      return self.product.variants[variantIndex].image;
    });

    const quantity = computed(() => {
      const variantIndex = self.variantIndex;
      return self.product.variants[variantIndex].quantity;
    });

    const shipping = computed(() => {
      if (props.premium) {
        return "FREE";
      }
      return 2.99;
    });

    return {
      name,
      quantity,
      shipping,
      image,
      variantIndex: 0,
      updateVariant(productVariantIndex: number) {
        this.variantIndex = productVariantIndex;
      },
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
  border: 2px solid black;
  border-radius: 100px;
  cursor: pointer;
  position: relative;
  bottom: 108px;
  left: 170px;
}
</style>
