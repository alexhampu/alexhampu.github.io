<template>
  <div class="container mx-auto text-center my-10">
    <div class="flex justify-center text-4xl">
      <div class="mx-4"><a href="https://github.com/alexhampu" class="hover:text-blue-700"><i class="fab fa-github"></i>
        Github</a></div>
      <div class="mx-4"><a href="https://linkedin.com/in/alexhampu95" class="hover:text-blue-700"><i
          class="fab fa-linkedin"></i> LinkedIn</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  mounted() {
    this.$store.commit('page-show-avatar');
    this.$store.commit('page-update-title', 'Hello world!');
    this.$store.commit('page-update-subtitle', `I'm a software developer`);
  }
}
</script>

<style scoped>

</style>
