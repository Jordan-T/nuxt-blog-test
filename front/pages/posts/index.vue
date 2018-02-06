<template>
  <section class="container">
    <div>
      <!--<app-logo/>-->
      <h1 class="title">
        All posts
      </h1>
      <div
        v-if="error"
      >
        {{ error.text }}
      </div>
      <ul
        v-if="posts.length"
      >
        <li
          v-for="post in posts"
          :key="post.id"
        >
          <nuxt-link :to="{ name: 'posts-id', params: { id: post.id } }">{{ post.title }}</nuxt-link>
        </li>
      </ul>
      <pre>{{ posts }}</pre>
    </div>
  </section>
</template>

<script>
  import AppLogo from '~/components/AppLogo.vue';
  import * as postApi from '../../../services/posts';

  export default {
    layout: 'blogIndex',
    asyncData() {
      return postApi.getPosts()
        .then(function({ data }){
          return {
            posts: data,
            error: false,
          }
        })
        .catch(function(err){
          console.error(err);

          return {
            posts: [],
            error: {
              text: 'impossible de charger les articles'
            }
          };
        })
      ;
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
</style>
