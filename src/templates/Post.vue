<template>
  <Layout>
    <div class="content-area">
      <div class="shadow title-bar"></div>
      <div class="container my-5">
        <div v-if="showAlert">
          <b-alert
            variant="success"
            class="mx-2 text-center mt-4 text-dark"
            show
          >
            <i class="fa-solid fa-circle-info mr-2"></i> Copied URL to
            Clipboard!
          </b-alert>
        </div>
        <g-image
          :src="$page.post.cover.large"
          class="w-75 rounded d-block mx-auto shadow mb-5"
        />
        <h1 class="display-2 text-capitalize mb-5">{{ $page.post.title }}</h1>
        <div
          class="d-inline-block mb-4 bg-light border rounded shadow py-2 px-3 items-center"
        >
          <g-link
            to="/blog"
            class="mr-3 mb-0"
            v-b-popover.hover.top="'Go Back to Blog Page'"
          >
            <i class="material-icons">arrow_back</i>
          </g-link>
          <i
            @click="copyURL"
            class="material-icons mr-3"
            v-b-popover.hover.bottom="'Copy the current URL to clipboard'"
            >share</i
          >
          <b-button
            @click="$router.push(`/blog/category/${$page.post.category.id}`)"
            class="align-top"
            size="sm"
            variant="danger"
            >{{ $page.post.category.name }}</b-button
          >
        </div>
        <p class="text-right mb-4 mr-3">Posted on {{ $page.post.date }}</p>
        <div class="shadow bg-light border rounded text-area">
          <p class="mb-0 text-justify">{{ $page.post.content }}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query ($path: String!) {
    post (path: $path) {
        title
        content
        date (format: "MMMM D, YYYY")
        cover {
          large
        },
        category {
          name
          id
        }
    }
}
</page-query>

<script>
export default {
  name: 'Post',
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: `Blog post for ${this.$page.post.title}`,
        },
      ],
    }
  },
  data() {
    return {
      showAlert: false,
    }
  },
  methods: {
    copyURL() {
      const currentUrl = window.location.href
      navigator.clipboard.writeText(currentUrl)
      this.showAlert = true
      setTimeout(() => (this.showAlert = false), 3000)
    },
  },
}
</script>

<style scoped>
.content-area {
  min-height: 85vh;
}

.title-bar {
  padding: 5% 0 5% 10%;
  background-color: #ffc107;
}

.material-icons {
  margin-bottom: -5px;
  margin-top: 3px;
  color: #fd7e14;
  cursor: pointer;
}

.material-icons:hover {
  color: #ffc107;
}

.text-area {
  padding: 2.5rem;
  margin-bottom: 5rem;
}

@media (max-width: 767px) {
  .title-bar {
    padding: 10% 0 5% 5%;
    background-color: #ffc107;
  }
  .display-2 {
    font-size: 2.8rem;
  }
  .text-area {
    padding: 2rem;
  }
}
</style>
