<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        All posts
      </h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{post.title}}</nuxt-link>
        </li>
      </ul>
      <pre>{{ posts }}</pre>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue'
  import * as postApi from '~/../services/posts';

  export default {
    async asyncData() {
      let { data } = await postApi.getPosts();
      return { posts: data }
    },
    head() {
      return {
        title: 'all posts'
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
