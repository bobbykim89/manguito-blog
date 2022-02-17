<template>
  <Layout>
    <div class="content-area mt-0 overflow-hidden">
      <SearchBar @filter="getQuery" />
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-9 order-2 order-md-1">
            <b-card-group
              v-if="getPosts"
              class="row row-cols-1 row-cols-md-2 row-cols-lg-3"
            >
              <g-link
                v-for="(post, index) in getPosts"
                :key="index"
                :to="post.node.path"
                class="mb-3"
              >
                <card-degree-image
                  :image-source="post.node.cover.thumb"
                  :image-alt="post.node.title"
                  :title="post.node.title"
                  :label="post.node.category.name"
                  label-background="danger"
                  border-variant="gray-2"
                  class="mx-2 shadow"
                />
              </g-link>
            </b-card-group>
          </div>
          <div class="col-lg-3 order-1 order-md-2">
            <rds-category-box :categories="categories" />
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
import CardDegreeImage from '@rds/card-degree-image'
import RDSCategoryBox from '~/components/post-parts/RDSCategoryBox.vue'
export default {
  metaInfo: {
    title: 'Blog',
    meta: [{ name: 'description', content: 'Blog page for Manguito Blog' }],
  },
  components: {
    SearchBar,
    PostCard,
    CategoryBox,
    'card-degree-image': CardDegreeImage,
    'rds-category-box': RDSCategoryBox,
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
