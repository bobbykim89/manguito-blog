<template>
  <Layout>
    <div class="content-area mt-0 overflow-hidden">
      <SearchBar @filter="getQuery" />
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-9 order-2 order-md-1">
            <b-card-group v-if="getPosts">
              <PostCard
                v-for="post in getPosts"
                :key="post.node.id"
                :post="post"
                :categoryButton="true"
                class="col-md-6 col-lg-4"
              />
            </b-card-group>
          </div>
          <div class="col-lg-3 order-1 order-md-2">
            <CategoryBox :categories="categories" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    posts: allPost (sortBy: "date", order: DESC) {
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
            thumb
          }
        }
      }
    }
    categories: allCategory (sortBy: "date", order: ASC) {
      edges {
        node {
          name
          id
        }
      }
    }
  }

</page-query>

<script>
import SearchBar from '~/components/post-parts/SearchBar.vue'
import PostCard from '~/components/post-parts/PostCard'
import CategoryBox from '~/components/post-parts/CategoryBox.vue'
export default {
  metaInfo: {
    title: 'Blog',
    meta: [{ name: 'description', content: 'Blog page for Manguito Blog' }],
  },
  components: {
    SearchBar,
    PostCard,
    CategoryBox,
  },
  data() {
    return {
      query: '',
      categories: [],
    }
  },
  methods: {
    getQuery(value) {
      this.query = value
    },
    getCategories() {
      this.categories = this.$page.categories.edges
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
          return post.node.title.match(regex) || post.node.content.match(regex)
        })
        return filtered
      }
    },
  },
  mounted() {
    this.getCategories()
  },
}
</script>

<style scoped>
.content-area {
  min-height: 85vh;
}
</style>
