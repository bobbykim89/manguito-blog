<template>
  <Layout>
    <div class="content-area mt-0 overflow-hidden">
      {{ $route.params.id }}
    </div>
  </Layout>
</template>

<page-query>
query ($categoryId: ID!) {
    category (id: $categoryId) {
        id
        name
        posts {
            id
            title
            content
            cover {
                formats {
                    thumbnail {
                        url
                    }
                }
            }
        }
    }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: `Manguito Blog - ${this.$page.category.name}`,
    }
  },
  data() {
    return {
      categories: [],
      posts: '',
    }
  },
  methods: {
    getCategoryPosts() {
      const posts = this.$page.category
      this.posts = posts
    },
  },
  mounted() {
    this.getCategoryPosts()
    console.log(this.posts)
  },
}
</script>

<style>
.content-area {
  min-height: 85vh;
}
</style>
