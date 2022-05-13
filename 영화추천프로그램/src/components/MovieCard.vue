<template>
<!-- 
    <div class="card col-4" style="width: 18rem;">
      <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top" alt="movieposter">
      <div class="card-body">
        <h5 class="card-title">{{ movie.title }}</h5>
        <p class="card-text">{{ movie.overview }}</p>
      </div>
    </div> -->

    <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card">
        <img :src="`https://image.tmdb.org/t/p/original/${movie.poster_path}`" class="card-img-top" alt="movieposter">
        <div class="card-body">
          <h5 class="card-title">{{ movie.title }}</h5>
          <p class="card-text">{{ movie.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


// const defaultUrl = 'https://image.tmdb.org/t/p/original/'

export default {
  name: 'MovieCard',
  props:{
    movie : Object,
  },
  // computed: {
  //   imageUrl (){
  //     return defaultUrl+movie.poster_path
  //   }
  

}
</script>

<style>

</style>