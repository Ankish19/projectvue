<!--** View Section **-->
<template>
  <div id="ProductDetalis">
    <div class="container">
      <div class="row">
        <div
          class="col-md-12"
          v-for="(items, index) in ProductArray"
          :key="index"
        >
          <h2 class="mb-5">Product Details Page</h2>
          <div class="row">
            <div class="col-md-4">
              <img class="w-100" />
            </div>
            <div class="col-md-7">
              <h2 class="product-header">
                <router-link
                  to="/product-descp"
                  :displayItem="ProductArray[index]"
                  >{{ items.productname }}</router-link
                >
              </h2>
              <div class="product-price">{{ items.productprice }}</div>
              <div class="product-description mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                illum harum aliquam odit veniam ab consectetur deserunt cumque
                dolores. Neque iste, sint et beatae impedit soluta animi
                quibusdam necessitatibus maiores?
              </div>
              <div class="mt-5">
                <a href="#" class="btn btn-primary"
                  ><i class="bi bi-bag"></i> Buy Now</a
                >
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12">
              <h2 class="product-header">Product Details</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                illum harum aliquam odit veniam ab consectetur deserunt cumque
                dolores. Neque iste, sint et beatae impedit soluta animi
                quibusdam necessitatibus maiores?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <router-link to="/product-descp" >Click me</router-link> -->
  </div>
</template>

<!--** Logic Section **-->
<script>
//  Import Section  //

export default {
  //  My Route  //
  name: "About",

  //  Components  //
  components: {  },

  //  Init  //
  mounted() {},

  //  Variables  //
  data() {
    return {
      ProductArray: [
        {
          productname: "Here Product Title",
          productImage: require("@/assets/1.jpg"),
          productprice: "$49.99",
          productdiscount: "$79.99",
          id: 1,
        },
        {
          productname: "Here Product Title 2",
          productImage: require("@/assets/2.jpg"),
          productprice: "$59.99",
          productdiscount: "$89.99",
          id: 2,
        },
        {
          productname: "Here Product Title 3",
          productImage: require("@/assets/2.jpg"),
          productprice: "$59.99",
          productdiscount: "$89.99",
          id: 3,
        },
      ],
    };
  },

  //  Functions  //
  methods: {
    changepage(data) {
      this.$router.push(`/products/${data.id}`);
      // console.log(JSON.stringify(data));
    },
  },
};
</script>

<!--** Style Section **-->
<style>

</style>
