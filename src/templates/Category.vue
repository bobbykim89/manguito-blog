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
                  :display-label="false"
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
import RDSCategoryBox from '~/components/post-parts/RDSCategoryBox.vue'
import CardDegreeImage from '@rds/card-degree-image'
export default {
  name: 'Category',
  metaInfo() {
    return {
      title: this.$page.category.name,
      meta: [
        {
          name: 'description',
          content: `Blog posts in ${this.$page.category.name} category`,
        },
      ],
    }
  },
  components: {
    CategoryBox,
    PostCard,
    'rds-category-box': RDSCategoryBox,
    'card-degree-image': CardDegreeImage,
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
  background-color: #ffc627;
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
    background-color: #ffc627;
  }
  .display-2 {
    font-size: 2.6rem;
  }
}
</style>
