<template>
  <div>
    <b-button v-b-toggle.sidebar variant="danger" class="side-button"
      >Manguito Blog</b-button
    >
    <b-sidebar
      id="sidebar"
      backdrop-variant="dark"
      backdrop
      right
      no-header
      shadow
    >
      <div class="p-3 sidebar-styling">
        <h3>Liked Manguito Blog?</h3>
        <h6>Check other works as well!</h6>
        <hr class="mb-4" />

        <div class="mb-3">
          <a
            href="https://manguitopage.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
            class="mb-3"
          >
            <card-degree-image
              :image-source="require('~/assets/images/manguitopage.png')"
              image-alt="manguito page"
              title="Manguito Page"
              :display-label="false"
              label-background="danger"
              border-variant="gray-2"
              class="shadow"
            />
          </a>
        </div>

        <div class="mb-3">
          <a
            href="https://bobby-cookbook.vercel.app/"
            target="_blank"
            rel="noreferrer"
            class="mb-3"
          >
            <card-degree-image
              :image-source="require('~/assets/images/cookbook.png')"
              image-alt="bobby's cookbook"
              title="Bobby's Cookbook"
              :display-label="false"
              label-background="danger"
              border-variant="gray-2"
              class="shadow"
            />
          </a>
        </div>

        <div class="mb-3">
          <a
            href="https://stock-track-woad.vercel.app/"
            target="_blank"
            rel="noreferrer"
            class="mb-3"
          >
            <card-degree-image
              :image-source="require('~/assets/images/stocktrack.png')"
              image-alt="stock tracker"
              title="Stock Tracker"
              :display-label="false"
              label-background="danger"
              border-variant="gray-2"
              class="shadow"
            />
          </a>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import CardDegreeImage from '@rds/card-degree-image'
export default {
  components: {
    'card-degree-image': CardDegreeImage,
  },
}
</script>

<style scoped>
.side-button {
  transform: rotateZ(-90deg);
  border: 3px solid #ffc627;
  position: fixed;
  right: -2.8rem;
  top: 50%;
}

.side-button:hover {
  border: 3px solid #ffc627;
}

.sidebar-styling {
  border-left: 0.6rem solid #ffc627;
  height: auto;
}
.card-title {
  text-transform: capitalize;
}

.card-img {
  height: 150px !important;
  width: 100%;
  object-fit: cover;
  object-position: 50% 0%;
}
</style>
