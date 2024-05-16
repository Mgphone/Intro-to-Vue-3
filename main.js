// if you creat only www.google.com not working
// however if you did full http like http://www.google.com ok
const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      // solution
      url: "https://www.vuemastery.com/",
      // solution
      link: "http://www.google.com",
    };
  },
});
