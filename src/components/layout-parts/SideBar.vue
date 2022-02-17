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
        <hr />

        <div class="card shadow mb-3">
          <g-image src="~/assets/images/manguitopage.png" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Manguito Page</h5>
            <a
              href="https://manguitopage.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <b-button variant="danger" class="w-100">Go to Page</b-button>
            </a>
          </div>
        </div>

        <div class="card shadow mb-3">
          <g-image src="~/assets/images/cookbook.png" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Bobby's Cookbook</h5>
            <a
              href="https://bobby-cookbook.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <b-button variant="danger" class="w-100">Go to Page</b-button>
            </a>
          </div>
        </div>

        <div class="card shadow mb-3">
          <g-image src="~/assets/images/stocktrack.png" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Stock Tracker</h5>
            <a
              href="https://stock-track-woad.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <b-button variant="danger" class="w-100">Go to Page</b-button>
            </a>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.side-button {
  transform: rotateZ(-90deg);
  border: 3px solid #ffc107;
  position: fixed;
  right: -2.8rem;
  top: 50%;
}

.side-button:hover {
  border: 3px solid #ffc107;
}

.sidebar-styling {
  border-left: 0.6rem solid #ffc107;
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
