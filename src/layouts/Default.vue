<template>
  <div class="layout">
    <Navbar />

    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from '~/components/layout-parts/Navbar'
import Footer from '~/components/layout-parts/Footer'
export default {
  components: {
    Navbar,
    Footer,
  },
}
</script>

<style></style>
