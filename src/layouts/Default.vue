<template>
  <div>
    <Navbar />
    <slot />
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

<style></style>
