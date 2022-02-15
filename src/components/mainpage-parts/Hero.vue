<template>
  <b-carousel
    v-model="slide"
    :interval="4000"
    indicators
    background="#ababab"
    class="shadow"
  >
    <b-carousel-slide v-for="url in urls" :key="url.id">
      <h1 class="display-3">Welcome to Manguito Blog!</h1>
      <p class="mb-md-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia at
        laboriosam culpa, ab modi laudantium debitis ipsum atque obcaecati
        animi.
      </p>
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
  .display-3 {
    font-size: 2.4rem;
  }
}
</style>
