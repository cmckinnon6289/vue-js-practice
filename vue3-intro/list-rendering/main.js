const app = Vue.createApp({
   data() {
      return {
         product: 'Socks',
         image: './assets/images/socks_blue.jpg',
         inStock: true,
         details: ['50% cotton', '30% wool', '20% polyester'],
         gdahghiadgiad: [
            { id: 2234, colour: 'green' },
            { id: 2235, colour: 'blue' }
         ]
      }
   }
})