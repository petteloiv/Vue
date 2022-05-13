<template>
  <div class="container">
    <h1>홈뷰</h1>
    <!-- <button @click="fetchMovies">영화받아오기</button> -->
    <div class="container">
      <movie-card 
      v-for="movie in movies"
      :movie="movie" 
      :key="movie.id"></movie-card>

    </div>
  </div>
</template>

<script>
import MovieCard from '../components/MovieCard.vue'
// @ is an alias to /src
import { mapState } from 'vuex'


export default {
  name: 'HomeView',
  components: {
    MovieCard,
  },
  beforeCreate (){
      this.$store.dispatch('fetchMovies')
    },
  methods: {
    // fetchMovies() {
    // this.$store.dispatch('fetchMovies')
  },
  computed: {
    ...mapState(['movies']),
  }
}
</script>
