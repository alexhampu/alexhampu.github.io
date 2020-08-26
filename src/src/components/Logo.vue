<template>
<div>
  <router-link to="/" class="logo">alex <span>hampu</span></router-link>
</div>
</template>

<script>
export default {
name: "Logo"
}
</script>

<style scoped>
.logo {
  @apply text-white text-3xl font-light m-0 flex items-center select-none;
}

.logo span {
  @apply text-2xl font-bold uppercase mt-1;
}
</style>
