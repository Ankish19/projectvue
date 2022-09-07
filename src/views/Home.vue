<!--** View Section **-->
<template>
  <div id="Home">
    <Header />
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            :src="bannerHeader"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Responsive left-aligned hero with image
          </h1>
          <p class="lead">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <main>
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div class="col" v-for="items in Package" :key="items">
            <div class="card mb-4 rounded-3 shadow-sm border-primary">
              <div class="card-header py-3 text-bg-primary border-primary">
                <h4 class="my-0 fw-normal">{{ items.MainHeader }}</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  {{ items.Price
                  }}<small class="text-muted fw-light">/mo</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>{{ items.List1 }}</li>
                  <li>{{ items.List2 }}</li>
                  <li>{{ items.List3 }}</li>
                  <li>{{ items.List4 }}</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  @click="model(items)"
                >
                  {{ items.button }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    <Footer />
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              {{ modelValue.MainHeader }}
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card-body">
              <h1 class="card-title pricing-card-title">
                {{ modelValue.Price
                }}<small class="text-muted fw-light">/mo</small>
              </h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>{{ modelValue.List1 }}</li>
                <li>{{ modelValue.List2 }}</li>
                <li>{{ modelValue.List3 }}</li>
                <li>{{ modelValue.List4 }}</li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!--** Logic Section **-->
<script>
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";
//  Import Section  //

export default {
  //  My Route  //
  name: "Home",

  //  Components  //
  components: { Header, Footer },

  //  Init  //
  mounted() {},

  //  Variables  //
  data() {
    return {
      bannerHeader: require("@/assets/bootstrap-themes.png"),
      Package: [
        {
          MainHeader: "Enterprise",
          Price: "$29",
          List1: "30 users included",
          List2: "15 GB of storage",
          List3: "Phone and email support",
          List4: "Help center access",
          button: " Contact us ",
        },
        {
          MainHeader: "Pro",
          Price: "$15",
          List1: "20 users included",
          List2: "10 GB of storage",
          List3: "Priority email support",
          List4: "Help center access",
          button: " Contact us ",
        },
        {
          MainHeader: "Free",
          Price: "$0",
          List1: "10 users included",
          List2: "2 GB of storage",
          List3: "Email support",
          List4: "Help center access",
          button: " Sign up for free ",
        },
      ],
      modelValue: [],
    };
  },

  //  Functions
  methods: {
    model(items) {
      this.modelValue = items;
      console.log(this.modelValue);
    },
  },
};
</script>

<!--** Style Section **-->
<style lang="scss" scoped></style>
