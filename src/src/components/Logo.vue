<template>
<div>
  <a class="logo">alex <span>hampu</span></a>
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
