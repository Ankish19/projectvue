<template>
  <div>
    <h1>Product Details Page info</h1>
  </div>
</template>

<script>
  export default {
    name: 'ProductDetailsInfo',
    // props: ['items'],
    mounted() {
      console.log(this.$route.params.items)
    }
  }
</script>

<style scoped>

</style>