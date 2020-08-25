<template>
<footer class="footer">
  <div class="container mx-auto">
    <div class="flex flex-col items-center justify-center py-10">
      <div class="lowercase font-bold text-sm">Developed with <i class="fas fa-heart text-red-500"></i> in 2020 by</div>
      <div><logo></logo></div>
    </div>
  </div>
</footer>
</template>

<script>
import Logo from "@/components/Logo";
export default {
name: 'Footer',
  components: {Logo}
}
</script>

<style scoped>
.footer {
  @apply bg-blue-800 relative text-white;
}
</style>
