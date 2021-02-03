<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>

        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-large"></div>

            <h2 style="text-align: center">Add new owner</h2>
            <form>
              <div class="a-spacing-medium">
                <label>Name</label>
                <br>
                <input
                  v-model="name"
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                >
              </div>


              <div class="a-spacing-medium">
                <label>About</label>
                <br>
                <input
                  v-model="about"
                  type="text"
                  class="a-input-text"
                  style="width: 100%"
                >
              </div>


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

              <hr/>
              <div class="a-spacing-medium">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span
                      @click="onAddOwner"
                      class="a-button-text"
                    >
                      Add new owner
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
  name: "owner",

  // async asyncData({$axios}) {
  //   try {
  //     let response = await $axios.$get("http://localhost:3002/api/categories");
  //     console.log(response);
  //
  //     return{
  //       categories: response.categories,
  //     }
  //
  //   } catch (err) {
  //   }
  // },


  data(){
    return{
      name: "",
      about: "",
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


    async onAddOwner() {
      try{
        let data = new FormData();
        data.append("name", this.name);
        data.append("about", this.about);
        data.append("photo", this.selectedFile);

        let res = await this.$axios.$post('http://localhost:3002/api/owners', data);
        await this.$router.push("/");

      }catch (e) {
        console.log(e)
      }
    }


  }

}
</script>

<style scoped>

</style>
