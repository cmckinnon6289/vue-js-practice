const app = Vue.createApp({
   data() {
      return {
         cart: 0,
         selectedVariant: 0,
         onSale: false,
         product: 'Socks',
         brand: 'Vue Mastery',
         details: ['50% cotton', '30% wool', '20% polyester'],
         variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
         ]
      }
   },
   methods: {
      addToCart() {
         this.cart += 1
      },
      updateImage(variantImage) {
         this.image = variantImage
      },
      updateVariant(index) {
         this.selectedVariant = index;
      }
   },
   computed: {
      title() {
         if (this.onSale) {
            return `${this.brand} ${this.product} is on sale!`
         }
         return this.brand + ' ' + this.product;
      }, image() {
         return this.variants[this.selectedVariant].image;
      }, inStock() {
         return this.variants[this.selectedVariant].quantity > 0;
      }
   }
})