<!--** View Section **-->
<template>
  <div id="header">
    <div class="container">
      <header
        class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"
      >
        <router-link
          to="/"
          class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        >
          <span class="fs-4">Vue Project</span>
        </router-link>

        <ul class="nav nav-pills">
          <li class="nav-item">
            <router-link
              to="/"
              class="nav-link"
              :class="ClassActive ? 'active' : null"
              aria-current="page"
              @click="ghost($event)"
              >Home</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link"
              :class="ClassActive ? 'active' : null"
              >About</router-link
            >
          </li>
        </ul>
      </header>
    </div>
  </div>
</template>

<!--** Logic Section **-->
<script>
//  Import Section  //

export default {
  //  My Route  //
  name: "Header",

  //  Components  //
  components: {},

  //  Init  //
  mounted() {},

  //  Variables  //
  data() {
    return {
      ClassActive: true,
    };
  },

  //  Functions  //
  methods: {
    ghost(e) {
      console.log(e.target);
    },
  },
};
</script>

<!--** Style Section **-->
<style lang="scss" scoped></style>
