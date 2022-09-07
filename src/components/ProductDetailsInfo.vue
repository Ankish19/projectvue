<!--** View Section **-->
<template>
  <div>
    <h1>this is product details page</h1>
  </div>
</template>

<!--** Logic Section **-->
<script>
//  Import Section  //

export default {
  //  My Route  //
  name: "ProductDetailsInfo",

  //  Components  //
  components: {},
  props: ["displayItem"],
  //  Init  //
  mounted() {
    console.log(this.displayItem, "hello world");
  },

  //  Variables  //
  data() {
    return {};
  },

  //  Functions  //
  methods: {},
};
</script>

<!--** Style Section **-->
<style lang="scss" scoped></style>
