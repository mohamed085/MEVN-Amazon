<template>
  <div class="mainContent">
    <div class="unified_widget pageBanner">
      <h1>Books</h1>
      <p>
        <b>
          Browse for more Books
          <a href="#">Leaders of notable people</a>, or
          <a href="#">Fantasy Books</a> like harry potter or Game of Thrones
          <a href="#">Best fantasy books of the year so far</a>
        </b>
      </p>
    </div>

    <div class="bx-root">
      <div class="row">
        <div class="col-sm-5 text-center">
          <div class="bx-root-image">
            <img src="/img/feature.jpg" class="img-fluid">
          </div>
        </div>
        <div class="col-sm-7 m-auto">
          <div class="bx-root-dtls">
            <div class="bx-root-heading">The program</div>
          </div>
          <div class="bx-root-subtext">
            Inside the mind of the legendary Author JK Rowling
          </div>
          <div class="bx-root-link">
            <span>Order Now</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Default from "~/layouts/default";
export default {
  name: "FeaturedProduct",
  components: {Default}
}
</script>

<style scoped>

</style>
