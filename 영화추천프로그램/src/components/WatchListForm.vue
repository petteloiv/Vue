<template>
  <div>
    <input 
    type="text"
    v-model="watchedMovieTitle"
    @keyup.enter="inputWatchedMovie"
    placeholder="무슨 영화를 보았니?">
  </div>
</template>

<script>
export default {
  name: 'WatchListForm',
  data() {
    return {
      watchedMovieTitle: '',
    }
  },
  methods: {
    inputWatchedMovie(){
      const newWatchedMovie = {
        title: this.watchedMovieTitle,
        date: new Date().getTime()
      }
      this.$store.dispatch('createWatchedMovie', newWatchedMovie)
      this.watchedMovieTitle = ''

    }
  }
}
</script>

<style>

</style>