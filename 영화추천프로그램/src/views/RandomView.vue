<template>
  <div>
    <h1>Random Movie</h1>
    <button @click="pickMovie">PICK</button>
    <div class="card" style="width: 18rem;" v-if="selectedMovie !== null">
      <img :src="`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ selectedMovie.title }}</h5>
     </div>
    </div>

    <div class="card" style="width: 18rem;" v-else>
      <!-- <img :src="`https://image.tmdb.org/t/p/original/${selectedMovie.poster_path}`" class="card-img-top" alt="..."> -->
      <div class="card-body">
        <h5 class="card-title"> NO MOVIE</h5>
      </div>
    </div>
    
  </div>
</template>

<script>
// import _ from 'lodash'
import { mapActions, mapState } from 'vuex'


export default {
  name: "RandomView",
  // data(){

  // },
  computed:{
    ...mapState(['selectedMovie'])
  },
  methods: {
    ...mapActions(['pickMovie'])
  },
  // beforeCreate(){
  //   this.$store.dispatch('pickMovie')
  // }
}
</script>

<style>

</style>