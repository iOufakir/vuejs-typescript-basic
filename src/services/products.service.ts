import { ProductType } from "../utils/types/CommonTypes";

export default {
  getProducts: (): Array<ProductType> => {
    return Array.of(
      {
        id: 1,
        name: "Socks",
        image: "assets/images/socks-red.jpg",
        brand: "Brand0",
        details: ["50% cotton", "30% wool", "20% polyester"],
        variants: [
          {
            id: 2234,
            color: "red",
            image: "assets/images/socks-red.jpg",
            quantity: 120,
          },
          {
            id: 2235,
            color: "blue",
            image: "assets/images/socks-blue.png",
            quantity: 100,
          },
        ],
      },
      {
        id: 2,
        name: "Jacket",
        image: "assets/images/jacket-black.jpeg",
        brand: "Brand1",
        details: ["50% cotton", "50% polyester"],
        variants: [
          {
            id: 24,
            color: "black",
            image: "assets/images/jacket-black.jpeg",
            quantity: 12,
          },
          {
            id: 25,
            color: "white",
            image: "assets/images/jacket-white.jpeg",
            quantity: 2,
          },
        ],
      },
      {
        id: 3,
        name: "Special Jacket",
        image: "assets/images/jacket-white.jpeg",
        brand: "Brand2",
        details: ["100% cotton"],
        variants: [
          {
            id: 25,
            color: "white",
            image: "assets/images/jacket-white.jpeg",
            quantity: 0,
          },
        ],
      }
    );
  },
};
