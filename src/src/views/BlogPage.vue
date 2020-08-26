<template>
<div class="container mx-auto px-2">
  <div v-for="(list, year) in posts" :key="year">
    <h4 class="text-2xl mb-4">{{ year }}</h4>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div v-for="post in list" :key="post.slug" class="border rounded-lg p-6">
        <div>
          <h1 class="text-3xl">{{ post.title }}</h1>
          <span class="text-sm">{{ post.date }}</span>
          <p class="text-lg">{{ post.description }}</p>
        </div>
        <router-link :to="`/blog/${year}/${post.slug}`" class="blog__more">Read more</router-link>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'PostsPage',
  mounted() {
    this.$store.commit('page-hide-avatar');
    this.$store.commit('page-update-title', 'Posts');
    this.$store.commit('page-update-subtitle', '');
    this.$store.dispatch('blog-get-posts');
  },
  computed: {
    posts() {
      return this.$store.state.blog.posts;
    }
  },
}
</script>

<style scoped>
.blog__more {
  @apply py-2 px-4 border bg-blue-600 text-white my-2 inline-block rounded;
}
</style>
