<!--** View Section **-->
<template>
  <div id="Product">
    <Header />
    <ProductDetalis />
    <!-- <About /> -->
    <Footer />
  </div>
</template>

<!--** Logic Section **-->
<script>
//  Import Section  //
import Header from "@/views/layouts/Header.vue";
import Footer from "@/views/layouts/Footer.vue";
import ProductDetalis from "@/components/ProductDetalis.vue";
// import About from "@/views/About.vue";
export default {
  //  My Route  //
  name: "Product",

  //  Components  //
  components: {
    Header,
    Footer,
    ProductDetalis,
    // About,
  },
  // props: ["arrayList"],
  //  Init  //
  mounted() {},

  //  Variables  //
  data() {
    return {
      productImage: require("@/assets/1.jpg"),
    };
  },

  //  Functions  //
  methods: {},
};
</script>

<!--** Style Section **-->
<style>
h2.product-header {
  font-size: 34px;
  font-weight: 800;
}

span.product-price {
  font-size: 25px;
  font-weight: 500;
}
</style>
