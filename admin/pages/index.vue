<template>
  <main>

    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">All Products</h1>
          <div class="a-spacing-large"></div>

          <nuxt-link to="/products" class="a-button-buy-again" style="margin-right: 5px;">Add new product</nuxt-link>
          <nuxt-link to="/owner" class="a-button-history" style="margin-right: 5px;">Add new owner</nuxt-link>
          <nuxt-link to="/category" class="a-button-history" style="margin-right: 5px;">Add new category</nuxt-link>

        </div>
      </div>
    </div>

    <div class="a-spacing-large"></div>

    <div class="container-fluid browsing-history">
      <div class="row">
        <div v-for="(product, index) in products"
             :key="product._id"
             class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb margin-right-10"
        >
          <div class="history-box">
            <div class="text-center">
              <!-- Product image -->
              <a href="#" class="a-link-normal">
<!--                <img src="../../server/uploads/" class="img-fluid">-->
                <img :src="product.photo" class="img-fluid">
              </a>

              <!-- Product title -->
              <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">{{ product.title }}</div>
              </span>
              </div>


              <!-- Product rating -->
              <div class="a-row">
                <a href="#">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </a>
                <span class="a-letter-space"></span>
                <span class="a-color-tertiary a-size-small asin-reviews">(24568)</span>
              </div>

              <!-- Product price -->
              <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">${{ product.price }}</span>
              </span>
              </div>

              <!-- Product buttons -->
              <nuxt-link :to="`/products/${product._id}`" class="a-button-history margin-right-10">Update</nuxt-link>
              <a
                @click="onDeleteProduct(product._id, index)"
                class="a-button-history margin-right-10"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </main>
</template>

<script>
export default {
  async asyncData({$axios}) {
    try {
      let response = await $axios.$get("http://localhost:3002/api/products");
      // console.log(response);

      return{
        products: response.products,

      }

    } catch (err) {
    }
  },

  methods: {
    async onDeleteProduct(id, index){
      try{
        let res = await this.$axios.$delete(`http://localhost:3002/api/products/${id}`)
        if (res.status){
          this.products.splice(index, 1);
        }

      }catch (e) {
        console.log(e)
      }
    }
  }


}
</script>

<style>
</style>
