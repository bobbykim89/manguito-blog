<template>
  <div class="card shadow mb-3 mx-2 mx-md-0 rds-border">
    <div
      class="card-header d-flex justify-content-between py-3"
      v-b-toggle.categorybox
      @click="toggleCategoryBox"
    >
      <h4 class="my-0">Categories</h4>
      <p class="h5 mb-0 mt-1">
        <i
          v-bind:class="[
            toggled ? 'fa-chevron-up' : 'fa-chevron-down',
            'fa-solid  ml-2',
          ]"
        />
      </p>
    </div>
    <b-collapse id="categorybox" visible>
      <div class="card-body">
        <div class="text-center">
          <g-link to="/blog" class="category-link">
            <span>
              All Posts
            </span>
            <hr class="mb-0" />
          </g-link>
          <g-link
            v-for="category in categories"
            :key="category.node.id"
            :to="`/blog/category/${category.node.id}/`"
            class="category-link"
          >
            <span>
              {{ category.node.name }}
            </span>
            <hr class="mb-0" />
          </g-link>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      toggled: true,
    }
  },
  methods: {
    toggleCategoryBox() {
      this.toggled = !this.toggled
    },
  },
}
</script>

<style scoped>
.category-link {
  text-decoration: none;
  color: #747474;
  font-size: 1.2rem;
}
.category-link:hover {
  color: #191919;
}
hr {
  border-color: transparent;
}

.rds-border {
  border-left: 8px solid #ffc627;
  border-radius: 0;
}
</style>
