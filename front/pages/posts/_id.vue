<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ post.title }}
      </h1>
      <nuxt-link to="/posts">back to list</nuxt-link>
      <pre>{{ post }}</pre>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import * as postApi from '~/../services/posts';

  export default {
    layout: 'blogPost',
    async asyncData({ params }) {
      let { data } = await postApi.getPost(params.id);
      return { post: data }
    },
    head() {
      return {
        title: this.post.title
      }
    },
    components: {
      AppLogo
    }
  }
</script>

<style>
</style>
