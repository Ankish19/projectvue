<!--** View Section **-->
<template>
  <div id="about">
    <!-- <Header /> -->
    <div class="container">
      <div class="row">
        <h2>About</h2>
      </div>
      <div class="row">
        <section class="section-products">
          <div class="container">
            <div class="row justify-content-center text-center">
              <div class="col-md-8 col-lg-6">
                <div class="header">
                  <h3>Featured Product</h3>
                  <h2>Popular Products</h2>
                </div>
              </div>
            </div>
            <div class="row justify-content-center">
              <!-- Single Product -->
              <div
                class="col-md-6 col-lg-4 col-xl-3"
                v-for="(product, key) in ProductArray"
                :key="key"
              >
                <div id="product-1" class="single-product">
                  <div class="card single-product">
                    <img :src="product.productImage" alt="" />
                    <div class="part-1">
                      <ul>
                        <li>
                          <a href="#"><i class="fas fa-shopping-cart"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fas fa-heart"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fas fa-plus"></i></a>
                        </li>
                        <li>
                          <a href="#"><i class="fas fa-expand"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div class="part-2">
                    <h3 class="product-title" @click="sendData(key)">
                      {{ product.productname }}
                    </h3>
                    <h4 class="product-old-price">
                      {{ product.productdiscount }}
                    </h4>
                    <h4 class="product-price">{{ product.productprice }}</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- <Product :arrayList="ProductArray" /> -->
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<!--** Logic Section **-->
<script>
//  Import Section  //
export default {
  //  My Route  //
  name: "ProductDetalis",

  //  Components  //
    components: {  },
  props: ["productList"],
  //  Init  //
  mounted() {},

  //  Variables  //
  data() {
    return {
      ghostValue :'hello world',
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
    sendData() {
      this.$router.push({
        name: 'ProductDetailsInfo',
        params: {
          items: 'kapoor',
        }
      })
    }
  },
};
</script>

<!--** Style Section **-->
<style scoped>
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

body {
  font-family: "Poppins", sans-serif;
  color: #444444;
}

a,
a:hover {
  text-decoration: none;
  color: inherit;
}

.section-products {
  padding: 80px 0 54px;
}

.section-products .header {
  margin-bottom: 50px;
}

.section-products .header h3 {
  font-size: 1rem;
  color: #fe302f;
  font-weight: 500;
}

.section-products .header h2 {
  font-size: 2.2rem;
  font-weight: 400;
  color: #444444;
}

.section-products .single-product {
  margin-bottom: 26px;
}

.section-products .card .single-product .part-1 {
  position: relative;
  height: 290px;
  max-height: 290px;
  margin-bottom: 20px;
  overflow: hidden;
}

.section-products .card .single-product .part-1::before {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.3s;
}

.section-products .single-product:hover .part-1::before {
  transform: scale(1.2, 1.2) rotate(5deg);
}

.section-products #product-1 .part-1::before {
  background: url("https://i.ibb.co/L8Nrb7p/1.jpg") no-repeat center;
  background-size: cover;
  transition: all 0.3s;
}

.section-products .single-product .part-1 .discount,
.section-products .single-product .part-1 .new {
  position: absolute;
  top: 15px;
  left: 20px;
  color: #ffffff;
  background-color: #fe302f;
  padding: 2px 8px;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.section-products .single-product .part-1 .new {
  left: 0;
  background-color: #444444;
}

.section-products .single-product .part-1 ul {
  position: absolute;
  bottom: -41px;
  left: 20px;
  margin: 0;
  padding: 0;
  list-style: none;
  opacity: 0;
  transition: bottom 0.5s, opacity 0.5s;
}

.section-products .single-product:hover .part-1 ul {
  bottom: 30px;
  opacity: 1;
}

.section-products .single-product .part-1 ul li {
  display: inline-block;
  margin-right: 4px;
}

.section-products .single-product .part-1 ul li a {
  display: inline-block;
  width: 40px;
  height: 40px;
  line-height: 40px;
  background-color: #ffffff;
  color: #444444;
  text-align: center;
  box-shadow: 0 2px 20px rgb(50 50 50 / 10%);
  transition: color 0.2s;
}

.section-products .single-product .part-1 ul li a:hover {
  color: #fe302f;
}

.section-products .single-product .part-2 .product-title {
  font-size: 1rem;
}

.section-products .single-product .part-2 h4 {
  display: inline-block;
  font-size: 1rem;
}

.section-products .single-product .part-2 .product-old-price {
  position: relative;
  padding: 0 7px;
  margin-right: 2px;
  opacity: 0.6;
}

.section-products .single-product .part-2 .product-old-price::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: #444444;
  transform: translateY(-50%);
}
</style>
