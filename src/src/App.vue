<template>
  <div id="app">
    <Header></Header>
    <div class="container mx-auto text-center my-10">
      <p>Coming soon</p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Header
  }
}
</script>

<style>
#app {
  @apply bg-white;
}
</style>
