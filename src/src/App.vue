<template>
  <div id="app">
    <Header></Header>
    <mobile-menu></mobile-menu>
    <main class="my-10 relative z-0">
      <router-view></router-view>
    </main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer';
import MobileMenu from "@/components/MobileMenu";

export default {
  name: 'App',
  components: {
    MobileMenu,
    Footer,
    Header
  },
  watch:{
    $route (){
      this.$store.commit('mobile-menu-close');
    }
  }
}
</script>

<style>
#app {
  @apply bg-white;
}
</style>
