<template>
  <div
    @click="scrollTop"
    :class="[pageScroll ? 'd-block' : 'd-none', 'scroll-top']"
  >
    <span class="material-icons mx-2 mt-2 cursor-pointer">expand_less</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageScroll: false,
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 300) {
        this.pageScroll = true
      } else {
        this.pageScroll = false
      }
    },
    scrollTop() {
      window.scroll({ top: 0, left: 0, behavior: 'smooth' })
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
.scroll-top {
  position: fixed;
  background-color: rgba(220, 53, 69, 0.9);
  color: #fff;
  bottom: 0;
  right: 0;
  transition: 0.4s;
  transition-timing-function: ease-in;
  margin: 0 1rem 1rem 0;
  border-radius: 0.5rem;
  cursor: pointer;
  z-index: 20;
}

.scroll-top:hover {
  color: #ffc107;
}
</style>
