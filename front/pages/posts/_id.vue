<template>
  <section class="container">
    <div>
      <app-logo/>
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
  .container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 300;
    font-size: 100px;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }
</style>
