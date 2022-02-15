<template>
  <b-carousel
    v-model="slide"
    :interval="4000"
    controls
    indicators
    background="#ababab"
    class="shadow"
  >
    <b-carousel-slide v-for="url in urls" :key="url.id" :caption="url.title">
      <template #img>
        <g-image
          :src="url.url"
          class="carousel-image d-block img-fluid w-100"
        />
      </template>
    </b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  props: {
    urls: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slide: 0,
    }
  },
}
</script>

<style scoped>
.carousel-image {
  max-height: 80vh !important;
  width: 100%;
  object-fit: cover;
  object-position: 0% 0%;
}
@media (max-width: 576px) {
  .carousel-image {
    height: 50vh !important;
    width: 100%;
    object-fit: cover;
    object-position: 0% 0%;
  }
}
</style>
