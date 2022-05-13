<template>
  <div>
    <h1>My Movie List</h1>
    <watch-list-form>
    </watch-list-form>
    <watch-list-item 
      v-for="watchedMovie in watchedMovies"
      :key="watchedMovie.date"
      :watchedMovie="watchedMovie">

      </watch-list-item>
  </div>
</template>

<script>
import WatchListForm from '../components/WatchListForm.vue'
import WatchListItem from '../components/WatchListItem.vue'
import { mapState } from 'vuex'

export default {
  name: 'WatchListView',
  components: {
    WatchListForm,
    WatchListItem,
  },
  computed: {
    ...mapState(['watchedMovies'])
  }

}
</script>

<style>

</style>