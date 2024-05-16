const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      // image: './assets/images/socks_blue.jpg',
      // inStock: false,
      selectedVarient: 0,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quality: 100,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quality: 0,
        },
      ],
      onSale: true,
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    // updateImage(variantImage) {
    //   this.image = variantImage;
    // },
    updatedVariant(index) {
      this.selectedVarient = index;
      //   console.log(this.selectedVarient);
    },
  },
  computed: {
    title() {
      return this.product + " " + this.brand;
    },
    image() {
      return this.variants[this.selectedVarient].image;
    },
    inStock() {
      return this.variants[this.selectedVarient].quality;
    },
    sale() {
      if (this.onSale) {
        return "On Sale " + this.product + " " + this.brand;
      }
    },
  },
});
