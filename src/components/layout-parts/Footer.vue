<template>
  <div class="bg-dark text-white shadow">
    <div class="container">
      <div class="row">
        <div class="col-md-6 py-2 py-md-5">
          <b-nav align="center" class="navbar-dark">
            <b-nav-item to="/" v-b-hover="handleHoverHome"
              ><span
                v-bind:class="[homeHovered ? 'text-white' : 'text-white-50']"
                >Home</span
              ></b-nav-item
            >
            <b-nav-item
              ><span class="text-secondary cursor">|</span></b-nav-item
            >
            <b-nav-item to="/blog" v-b-hover="handleHoverBlog"
              ><span
                v-bind:class="[blogHovered ? 'text-white' : 'text-white-50']"
                >Blog</span
              ></b-nav-item
            >
            <b-nav-item
              ><span class="text-secondary cursor">|</span></b-nav-item
            >
            <b-nav-item to="/about" v-b-hover="handleHoverAbout"
              ><span
                v-bind:class="[aboutHovered ? 'text-white' : 'text-white-50']"
                >About</span
              ></b-nav-item
            >
          </b-nav>
        </div>
        <div class="col-md-6 py-md-5">
          <div class="text-center text-md-right mt-2 pb-4 pb-md-0">
            <g-image
              src="~/assets/images/logo.png"
              alt="logo"
              class="mr-2 mb-1"
              width="30"
              height="30"
            />
            <span class="font-weight-bolder"
              >MANGUITO BLOG &copy; {{ year.getFullYear() }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date(),
      homeHovered: false,
      blogHovered: false,
      aboutHovered: false,
    }
  },
  methods: {
    handleHoverHome(e) {
      this.homeHovered = e
    },
    handleHoverBlog(e) {
      this.blogHovered = e
    },
    handleHoverAbout(e) {
      this.aboutHovered = e
    },
  },
}
</script>

<style scoped>
.cursor {
  cursor: default;
}
</style>
