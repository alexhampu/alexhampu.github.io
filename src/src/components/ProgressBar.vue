<template>
<div class="progress" ref="progress">
  <div class="progress__header">
    <div class="progress__title">{{ $props.title }}</div>
    <div class="progress__value">{{ $props.value }}%</div>
  </div>
  <div class="progress__bar">
    <div class="progress__bar-value" :class="$props.class" :style="{width: `${$props.value}%`}"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ProgressBar',
  props: {
    title: String,
    value: Number,
    class: Array
  },
  mounted() {
    setTimeout(() => {
      this.$refs.progress.classList.add('progress--loaded');
    }, 200);
  }
}
</script>

<style scoped>
.progress__header {
  @apply flex justify-between items-center;
}

.progress__title {
  @apply font-bold;
}

.progress__value {
  @apply text-lg;
}

.progress__bar {
  @apply bg-gray-300 rounded-lg my-2 relative overflow-hidden;
  height: 8px;
}

.progress__bar-value {
  @apply absolute top-0 left-0 h-full block transform -translate-x-64;
  transition: .3s transform;
}

.progress--loaded .progress__bar-value {
  @apply translate-x-0;
}
</style>
