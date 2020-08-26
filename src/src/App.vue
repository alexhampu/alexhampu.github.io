<template>
  <div id="app">
    <Header></Header>
    <main>
      <div class="container mx-auto text-center my-10">
        <div class="flex justify-center text-4xl">
          <div class="mx-4"><a href="https://github.com/alexhampu" class="hover:text-blue-700"><i class="fab fa-github"></i> Github</a></div>
          <div class="mx-4"><a href="https://linkedin.com/in/alexhampu95" class="hover:text-blue-700"><i class="fab fa-linkedin"></i> LinkedIn</a></div>
        </div>
      </div>
    </main>
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
