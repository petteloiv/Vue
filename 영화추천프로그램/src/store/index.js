import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movies: [],
    selectedMovie: null,
    watchedMovies: [],
  },
  getters: {
    
  },
  mutations: {
    FETCH_MOVIES(state, movies) {
      state.movies = movies
    },
    PICK_MOVIE(state) {
      state.selectedMovie =  _.sample(state.movies)
      // return state.selectedMovie
    },
    CREATE_WATCHED_MOVIE(state, newWatchedMovie) {
      state.watchedMovies.push(newWatchedMovie)
    }
  },
  actions: {
    fetchMovies(context) {
      axios.get("https://api.themoviedb.org/3/movie/popular?api_key=62034e6d886cc5a85c41a3f1eae3aaa4&language=ko-KR&page=1")
        .then(response => {
          console.log(response.data.results)
          context.commit("FETCH_MOVIES", response.data.results)
        })
        .catch(error => {
          console.log(error)
        })
    },
    pickMovie(context) {
      context.commit("PICK_MOVIE")
    },
    createWatchedMovie(context, newWatchedMovie) {
      context.commit('CREATE_WATCHED_MOVIE', newWatchedMovie)
    }
  },
  modules: {
  }
})
