<template>
  <div class="wrapper">
    <Navbar />
    <transition name="fade" appear>
      <main>
        <slot />
      </main>
    </transition>
    <SideBar />
    <ScrollTop />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/layout-parts/Navbar'
import Footer from '~/components/layout-parts/Footer'
import SideBar from '~/components/layout-parts/SideBar'
import ScrollTop from '~/components/layout-parts/ScrollTop'
export default {
  components: {
    Navbar,
    Footer,
    SideBar,
    ScrollTop,
  },
}
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter {
  opacity: 0;
}
</style>
