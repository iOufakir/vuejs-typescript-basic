import { ProductType } from "../utils/types/CommonTypes";

export default {
  getProducts: (): Array<ProductType> => {
    return Array.of(
      {
        id: 1,
        name: "Socks",
        image: "assets/images/socks-red.jpg",
        inventory: 120,
        details: ["50% cotton", "30% wool", "20% polyester"],
        variants: [
          {
            id: 2234,
            color: "red",
            image: "assets/images/socks-red.jpg",
          },
          {
            id: 2235,
            color: "blue",
            image: "assets/images/socks-blue.png",
          },
        ],
      },
      {
        id: 2,
        name: "Jacket",
        image: "assets/images/jacket-black.jpeg",
        inventory: 2,
        details: ["50% cotton", "50% polyester"],
        variants: [
          { id: 24, color: "black", image: "assets/images/jacket-black.jpeg" },
          { id: 25, color: "white", image: "assets/images/jacket-white.jpeg" },
        ],
      },
      {
        id: 3,
        name: "Special Jacket",
        image: "assets/images/jacket-white.jpeg",
        inventory: 0,
        details: ["100% cotton"],
        variants: [
          { id: 25, color: "white", image: "assets/images/jacket-white.jpeg" },
        ],
      }
    );
  },
};
