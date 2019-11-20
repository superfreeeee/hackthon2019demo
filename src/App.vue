<template>
  <Layout/>
</template>

<script>
export default {
  components: {
    Layout: () => import('./views/layout/Layout.vue')
  }
}
</script>

<style>

body, html {
  width: 100%;
  height: 100%;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
