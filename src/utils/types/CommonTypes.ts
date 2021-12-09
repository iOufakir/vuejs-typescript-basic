export interface ProductType {
  id: number;
  name: string;
  image: string;
  brand: string;
  details: Array<string>;
  variants: Array<ProductVariant>
}

interface ProductVariant {
  id: number;
  color: string;
  image: string;
  quantity: number;
}

export interface Cart {
  selectedProduct: ProductType,
  selectedVariantId: number;
}