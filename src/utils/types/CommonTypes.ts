export interface ProductType {
  id: number;
  name: string;
  image: string;
  inventory: number;
  details: Array<string>;
  variants: Array<ProductVariant>
}

interface ProductVariant {
  id: number;
  color: string;
  image: string;
}
