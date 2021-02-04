<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>

        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-large"></div>

            <h2 style="text-align: center">Update {{ product.title }}</h2>
            <form>

              <!-- Category -->
              <div class="a-spacing-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="categoryID">
                  <option
                    v-for=" category in categories "
                    :key="category._id"
                    :value="category._id"
                  >
                    {{ category.type }}
                  </option>
                </select>
              </div>

              <!-- Owner -->
              <div class="a-spacing-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="ownerID">
                  <option
                    v-for=" owner in owners "
                    :key="owner._id"
                    :value="owner._id"
                  >
                    {{ owner.name }}
                  </option>
                </select>
              </div>

              <!-- Title -->
              <div class="a-spacing-medium">
                <label>Title</label>
                <br>
                <input
                  v-model="title"
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                  :placeholder="product.title"
                >
              </div>

              <!-- Price -->
              <div class="a-spacing-medium">
                <label>Price</label>
                <br>
                <input
                  step="0.01"
                  v-model="price"
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  :placeholder="product.price"
                >
              </div>


              <!-- stockQuantity -->
              <div class="a-spacing-medium">
                <label>stock quantity</label>
                <br>
                <input
                  v-model="stockQuantity"
                  type="number"
                  class="a-input-text"
                  style="width: 100%"
                  :placeholder="product.stockQuantity"
                >
              </div>

              <!-- Description -->
              <div class="a-spacing-medium">
                <label>Description</label>
                <br>
                <textarea
                  v-model="description"
                  placeholder="Provide details such as a product details"
                  style="width: 100%"
                  :placeholder="product.description"
                ></textarea>
              </div>

              <!-- Photo -->
              <div class="a-spacing-medium">
                <label>Add photo</label>
                <br>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input
                      @change="onFileSelected"
                      type="file"
                    >
                    <p style="margin-top: -70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>

              <!-- button -->
              <hr/>
              <div class="a-spacing-medium">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span
                      @click="onUpdateProduct"
                      class="a-button-text"
                    >
                      Update product
                    </span>
                  </span>
                </span>
              </div>

            </form>

          </div>

        </div>

        <div class="col-sm-3"></div>
      </div>
    </div>

  </main>
</template>

<script>
export default {

  async asyncData({ $axios , params }){
    try {
      let categories = await $axios.$get("http://localhost:3002/api/categories");
      let owners = await $axios.$get("http://localhost:3002/api/owners");
      let product = await $axios.$get(`http://localhost:3002/api/products/${params.id}`);

      const [categoriesRes, ownersRes, productRes] = await Promise.all([
        categories,
        owners,
        product
      ]);

      console.log(productRes.product);

      return{
        categories: categoriesRes.categories,
        owners: ownersRes.owners,
        product: productRes.product
      }

    } catch (err) {
      console.log(err);
    }
  },

  data(){
    return{
      categoryID: null,
      ownerID: null,
      title: "",
      price: "",
      description: "",
      stockQuantity: "",
      selectedFile: null,
      fileName: ""
    }
  },

  methods:{
    onFileSelected(event){
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
      this.fileName = event.target.files[0].name;
    },

    async onUpdateProduct() {
      let data = new FormData();
      data.append("title", this.title);
      data.append("categoryID", this.categoryID);
      data.append("ownerID", this.ownerID);
      data.append("description", this.description);
      data.append("photo", this.selectedFile);
      data.append("price", this.price);
      data.append("stockQuantity", this.stockQuantity);

      let result = await this.$axios.$put(`http://localhost:3002/api/products/${this.$route.params.id}`, data);

      await this.$router.push("/");

    }

  },




}
</script>

<style scoped>

</style>
