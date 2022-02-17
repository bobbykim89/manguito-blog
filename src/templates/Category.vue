<template>
  <Layout>
    <div class="content-area mt-0 overflow-hidden">
      <div class="shadow title-bar">
        <h1 class="display-2">
          {{ $page.category.name }}
        </h1>
      </div>
      <div class="container">
        <div class="row my-5">
          <div class="col-lg-9 order-2 order-md-1">
            <b-card-group v-if="getPosts">
              <PostCard
                v-for="post in getPosts"
                :key="post.node.id"
                :post="post"
                :categoryButton="false"
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
query ($path: String!) {
  category (path: $path) {
      name
      id
      posts {
          title
          content
          uid
          cover {
              formats {
                  thumbnail {
                      url
                  }
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
import CategoryBox from '~/components/post-parts/CategoryBox.vue'
import PostCard from '~/components/post-parts/PostCard.vue'
export default {
  components: {
    CategoryBox,
    PostCard,
  },
  data() {
    return {
      categories: [],
    }
  },
  methods: {
    getCategories() {
      this.categories = this.$page.categories.edges
    },
  },
  computed: {
    getPosts() {
      const category = this.$page.category.posts
      let postList = []
      category.forEach((post) => {
        postList.push({
          node: {
            id: post.uid,
            title: post.title,
            content: post.content,
            path: `/blog/post/${post.uid}/`,
            cover: {
              thumb: post.cover.formats.thumbnail.url,
            },
          },
        })
      })
      return postList
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

.title-bar {
  padding: 10% 0 3% 10%;
  background-color: #ffc107;
}

.display-2 {
  text-decoration: underline;
  display: inline-block;
  color: #dc3545;
  padding: 0 1rem;
}

@media (max-width: 767px) {
  .title-bar {
    padding: 20% 0 5% 5%;
    background-color: #ffc107;
  }
  .display-2 {
    font-size: 3rem;
  }
}
</style>
