<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">

        <!--- Sidebar -->
        <div class="col-xl-2 col-lg-3 md-4 col-sm-4">

        </div>

        <!--- Main content -->
        <div class="col-xl-10 col-lg-9 md-8 col-sm-8">
          <FeaturedProduct></FeaturedProduct>

          <div class="mainResults">
            <ul
              v-for="product in products"
              :key="product._id"
              class="s-result-list"
            >
              <li class="s-result-item celwidget">
                <div class="s-item-container">
                  <!-- Best seller -->
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">Best Seller</a>
                    </div>
                  </div>

                  <div>
                    <div class="row">
                      <!-- image -->
                      <div class="col-sm-3 text-center">
                        <a :href="`/products/`+product._id">
                          <img :src="product.photo" class="img-fluid">
<!--                          <img src="../../server/uploads/steve_jobs.jpg" class="img-fluid">-->
                        </a>
                      </div>

                      <div class="col-sm-9">
                        <div class="a-row a-spacing-small">
                          <!-- Title and Date -->
                          <a href="#" class="a-link-normal">
                            <h2 class="a-size-medium">
                              {{ product.title }}
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                              <span class="a-size-small a-color-secondary">Sep 3, 2010</span>
                            </h2>
                          </a>
                        </div>

                        <!-- Author Name -->
                        <div class="a-row a-spacing-small">
                          <span class="a-size-small a-color-secondary"></span>
                          <span class="a-size-small a-color-secondary">
                          <a href="#" class="a-link-normal a-text-normal">JK Rowling</a>
                        </span>
                        </div>

                        <!-- Shipment -->
                        <div class="a-row">
                          <span class="a-size-small">Ships to USA</span>
                        </div>

                        <div class="row">
                          <div class="col-sm-7">
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">Hardcover</a>
                            </div>

                            <!-- price -->
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">
                                <span class="a-offscreen">${{ product.price }}</span>
                                <span class="a-color-base sx-zero-spacing">
                                <span class="sx-price sx-price-large">
                                  <sup class="sx-price-currency">$</sup>
                                  <span class="sx-price-whole">{{ product.price }}</span>
                                  <span class="sx-price-fractional">00</span>
                                </span>
                              </span>
                              </a>
                              <span class="a-letter-space"></span>
                              <span class="a-size-base-plus a-color-secondary a-text-strike">$128.00</span>
                            </div>


                            <!-- Audible Trial -->
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary">Free with Audible trial</span>
                            </div>

                            <hr />
                            <!-- Other Format -->
                            <span class="a-size-small a-color-secondary">
                            Other format
                            <span class="a-size-small a-link-normal a-text-normal"></span>
                            <a href="#" class="a-size-small a-link-normal a-text-normal">Audio CD</a>
                          </span>
                          </div>

                          <!-- Rating -->
                          <div class="col-sm-5">
                            <div class="a-row a-spacing-top-mini">
                              <!-- Star Ratings -->

                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from "~/components/FeaturedProduct";
export default {
  components: {
    FeaturedProduct
  },

  async asyncData({ $axios }){
    try{
      let res = await $axios.$get('http://localhost:3002/api/products');
      return{
        products: res.products
      }

    }catch (e) {
      console.log(e);
    }
  }

}
</script>

<style>
</style>
