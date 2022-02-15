<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>Hello, world!</h1>
    <div v-for="post in posts" :key="post.node.id">
      <h1>{{ post.node.title }}</h1>
      <p>{{ post.node.content }}</p>
      <g-image :src="post.node.cover.medium" width="500" />
      <p>
        {{ post.node.cover.medium }}
      </p>
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          id
          title
          content
          category {
            name
          }
          cover {
            large
            medium
          }
        }
      }
    }
  }
</page-query>

<script>
import axios from "axios";
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  data() {
    return {
      posts: []
    };
  },
  async mounted() {
    this.posts = this.$page.posts.edges;
    console.log(this.posts);
    const images = await axios.get(
      "https://manguito-blog-backend.herokuapp.com/upload/files"
    );
    console.log(images);
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
