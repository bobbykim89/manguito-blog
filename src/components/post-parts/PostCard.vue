<template>
  <div class="mb-3 px-2">
    <b-card
      :title="post.node.title"
      :img-src="post.node.cover.thumb"
      class="h-100 shadow card-hover"
    >
      <b-card-text>
        <div class="text-right">
          <b-button
            :to="`/post/category/${post.node.category.id}`"
            class="mb-2 display-inline-block text-right text-white"
            variant="warning"
          >
            {{ post.node.category.name }}
          </b-button>
        </div>
        <p>
          {{ post.node.content.substring(0, 100) }}
        </p>
      </b-card-text>
      <b-button :to="`/post/${post.node.id}`" variant="danger" class="w-100"
        >Read Post</b-button
      >
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-title {
  text-transform: capitalize;
}

.card-img {
  height: 200px !important;
  width: 100%;
  object-fit: cover;
  object-position: 0% 0%;
}

.card-hover {
  transition: 0.2s;
  transition-timing-function: ease-out;
}

.card-hover:hover {
  transform: scale(1.05);
  transition: 0.2s;
  transition-timing-function: ease-out;
}
</style>
