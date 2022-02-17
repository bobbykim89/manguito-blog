<template>
  <Layout class="content">
    <Hero :urls="heroImages" class="mb-5" />
    <div class="container">
      <blockquote class="blockquote text-center">
        <p class="mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facilis
          animi temporibus pariatur ducimus quaerat aliquam iste consequatur
          tempora? Eligendi error neque officia ipsum ducimus. Cum magnam vero
          dolore corporis id dolorum atque ut voluptates laboriosam unde rerum
          veniam, a quod nisi placeat fugit repellendus accusantium odit optio
          esse blanditiis.
        </p>
        <hr class="w-25  hr-yellow" />
      </blockquote>
      <h1 class="display-4 mt-5 ml-2">Latest Posts</h1>
      <b-card-group class="mt-4 mb-5">
        <PostCard
          v-for="post in posts.slice(0, 4)"
          :key="post.node.id"
          :post="post"
          :categoryButton="true"
          class="col-md-4 col-lg-3"
        />
      </b-card-group>
      <hr class="w-25  hr-yellow" />
    </div>
    <Introduction />
    <h1 class="display-1 text-center mb-5">
      <span class="mr-3">Thanks for coming!</span>
      <g-image src="~/assets/images/logo.png" width="80" class="mt-3 mt-md-0" />
    </h1>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost {
      edges {
        node {
          path
          id
          title
          content
          category {
            name
            id
          }
          cover {
            large
            thumb
          }
        }
      }
    }
  }
</page-query>

<script>
import Hero from '~/components/mainpage-parts/Hero.vue'
import PostCard from '~/components/post-parts/PostCard.vue'
import Introduction from '~/components/mainpage-parts/Introduction.vue'
export default {
  metaInfo: {
    title: 'Manguito Blog',
    meta: [{ name: 'description', content: 'Welcome to Manguito Blog!' }],
  },
  components: {
    Hero,
    PostCard,
    Introduction,
  },
  data() {
    return {
      posts: [],
      heroImages: [],
    }
  },
  methods: {
    getHeroImages() {
      const posts = this.$page.posts.edges
      const heroImages = posts.map((post) => {
        return {
          url: post.node.cover.large,
          id: post.node.id,
          title: post.node.title,
        }
      })
      this.heroImages = heroImages
    },
  },
  mounted() {
    this.posts = this.$page.posts.edges
    this.getHeroImages()
  },
}
</script>

<style scoped>
.content {
  min-height: 85vh;
}
.hr-yellow {
  border-top: 0.6rem solid;
  color: rgb(253 224 71);
}
.display-4 {
  display: inline-block;
  padding: 0 1rem;
  color: #fff;
  background-color: #ffc107;
  margin-top: 1rem;
}

@media (max-width: 576px) {
  .display-1 {
    font-size: 2.7rem;
  }
}
</style>
