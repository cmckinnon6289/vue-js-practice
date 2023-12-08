const app = Vue.createApp({
   data() {
      let bruh = 2 > 3;
      return {
         product: 'Plant balls',
         image: './assets/images/plant-balls.png',
         inStock: bruh
      }
   }
})