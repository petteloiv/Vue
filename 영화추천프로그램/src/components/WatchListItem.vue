<template>
  <div>
    <p>{{ watchedMovie.title }}</p>
  </div>
</template>

<script>


export default {
  name: 'WatchListItem',
  props:{
    watchedMovie : Object,
  },

}
</script>

<style>

</style>