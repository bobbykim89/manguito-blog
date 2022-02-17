<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    varianr="transparent"
    :class="[navScroll ? 'nav-scroll' : '', 'sticky-nav w-100']"
  >
    <b-navbar-brand href="/" class="ml-2">
      <g-image src="~/assets/images/logo.png" width="30" class="mr-2" />
      <span class="font-weight-bolder navlink-shadow">
        MANGUITO BLOG</span
      ></b-navbar-brand
    >
    <b-navbar-toggle
      target="nav-collapse"
      class="ml-auto border-0"
    ></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto mr-lg-3">
        <b-nav-item to="/" class="mx-auto mx-md-0"
          ><span class="navlink-shadow">Home</span></b-nav-item
        >
        <b-nav-item to="/blog" class="mx-auto mx-md-0"
          ><span class="navlink-shadow">Blog</span></b-nav-item
        >
        <b-nav-item to="/about" class="mx-auto mx-md-0"
          ><span class="navlink-shadow">About</span></b-nav-item
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      navScroll: false,
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 150) {
        this.navScroll = true
      } else {
        this.navScroll = false
      }
    },
  },
  beforeMount() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
.sticky-nav {
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 10;
  transition: 0.4s;
  transition-timing-function: ease-in;
}

.nav-scroll {
  background-color: rgba(255, 193, 7, 0.7);
}

.navlink-shadow {
  color: #fff;
  text-shadow: #000 0px 0px 12px;
}
.navlink-shadow:hover {
  color: #f2f2f2;
}
</style>
