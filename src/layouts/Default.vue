<template>
  <div>
    <Navbar />
    <slot />
    <SideBar />
    <Footer />
  </div>
</template>

<script>
import Navbar from '~/components/layout-parts/Navbar'
import Footer from '~/components/layout-parts/Footer'
import SideBar from '~/components/layout-parts/SideBar'
export default {
  components: {
    Navbar,
    Footer,
    SideBar,
  },
}
</script>

<style></style>
