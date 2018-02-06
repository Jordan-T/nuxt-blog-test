<template>
  <div>
    <v-header/>
    <h2>blog index layout</h2>
    <nuxt/>
  </div>
</template>

<script>
  import VHeader from '../components/organisms/header';

  export default {
    name: 'BlogIndexLayout',
    components: {
      VHeader
    }
  }
</script>

<style>
</style>
