<template>
  <Layout>
    <div class="content-area mt-0 overflow-hidden">
      <SearchBar @filter="getQuery" />
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-9">
            <b-card-group v-if="getPosts">
              <PostCard
                v-for="post in getPosts"
                :key="post.node.id"
                :post="post"
                class="col-md-6 col-lg-4"
              />
            </b-card-group>
          </div>
          <div class="col-lg-3">Category goes here</div>
        </div>
      </div>
    </div>
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
            id
          }
          cover {
            thumb
          }
        }
      }
    }
  }
</page-query>

<script>
import SearchBar from '~/components/post-parts/SearchBar.vue'
import PostCard from '~/components/post-parts/PostCard'
export default {
  metaInfo: {
    title: 'Manguito Blog - Blog',
  },
  components: {
    SearchBar,
    PostCard,
  },
  data() {
    return {
      query: '',
    }
  },
  methods: {
    getQuery(value) {
      this.query = value
    },
  },
  computed: {
    getPosts() {
      const posts = this.$page.posts.edges
      if (this.query === '') {
        return posts
      } else {
        const filtered = posts.filter((post) => {
          const regex = new RegExp(`${this.query}`, 'gi')
          return post.node.title.match(regex) || post.node.title.match(regex)
        })
        return filtered
      }
    },
  },
}
</script>

<style scoped>
.content-area {
  min-height: 85vh;
}
</style>
