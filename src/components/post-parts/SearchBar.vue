<template>
  <div class="shadow searchbar">
    <b-input-group>
      <b-input-group-prepend>
        <b-button @click="clickSearch" variant="danger">
          <i class="fa-solid fa-magnifying-glass"></i>
        </b-button>
      </b-input-group-prepend>
      <b-form-input
        type="text"
        id="searchFilter"
        v-model="query"
        @keyup="$emit('filter', query)"
        placeholder="Press enter keywords."
      ></b-form-input>
      <b-input-group-append>
        <b-button @click="clearSearch" variant="danger"> Clear </b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
    }
  },
  methods: {
    clearSearch() {
      this.query = ''
      this.$emit('filter', '')
    },
    clickSearch() {
      document.getElementById('searchFilter').focus()
    },
  },
}
</script>

<style scoped>
.searchbar {
  padding: 10% 30% 5%;
  background-color: #ffc107;
}

@media (max-width: 767px) {
  .searchbar {
    padding: 25% 5% 10%;
    background-color: #ffc107;
  }
}
</style>
