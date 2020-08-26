<template>
  <div>
    <button @click="toggleMenu()"><i class="fas fa-bars"></i></button>
  </div>
</template>

<script>
export default {
  name: "MobileMenuButton",
  methods: {
    toggleMenu: function () {
      this.$store.commit('mobile-menu-toggle');
    }
  }
}
</script>

<style scoped>
button {
  @apply bg-white py-1 px-3 rounded-lg text-2xl;
}
</style>
