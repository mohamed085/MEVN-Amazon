<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>

        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-large"></div>

            <h2 style="text-align: center">Add new category</h2>
            <form>
              <div class="a-spacing-medium">
                <label>Type</label>
                <br>
                <input
                  v-model="type"
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                >
              </div>


              <hr/>
              <div class="a-spacing-medium">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span
                      @click="onAddCategory"
                      class="a-button-text"
                    >
                      Add new category
                    </span>
                  </span>
                </span>
              </div>
            </form>

            <h4>All categories</h4>
            <ul class="list-group-item">
              <li v-for="category in categories" :key="category._id">{{ category.type }}</li>
            </ul>

          </div>
        </div>

        <div class="col-sm-3"></div>

      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "category",

  async asyncData({$axios}) {
    try {
      let response = await $axios.$get("http://localhost:3002/api/categories");
      console.log(response);

      return{
        categories: response.categories,
      }

    } catch (err) {
    }
  },


  data(){
    return{
     type: ""
    }
  },

  methods:{
    async onAddCategory() {
      try{
        let data = {
          type: this.type
        };
        let res = await this.$axios.$post('http://localhost:3002/api/categories', data);
        if(res.status){
          this.categories.push(data);
        }
      }catch (e) {
       console.log(e)
      }
    }

  }

}
</script>

<style scoped>

</style>
