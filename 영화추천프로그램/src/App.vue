<template>
  
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/random">Random</router-link> |
      <router-link to="/watch-list">WatchList</router-link>
    </nav>
    <router-view/>
    
  </div>

</template>

<script>

// const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=62034e6d886cc5a85c41a3f1eae3aaa4&language=en-US&page=1'



export default {

  name: 'App',
  components: {

  },
  // data() {
  //   movies : []
  // },
  // methods: {
  //   created() {
  //     axios.get(API_URL)
  //     .then(res => {
  //       this.movies = res.data.results
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //     }
  //   },
  //   created() {
  //     this.movies = movies
  //   }
  // }
}


</script>

<style>

</style>