<template>
  <div class="container mx-auto">
    <div class="post__content" v-html="post.html"></div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  data() {
    return {
    };
  },
  methods: {
    getPost(year, slug) {
      fetch(`/posts/${year}/${slug}.json`).then((response) => {
        if (response.status === 200) {
          response.json().then((post) => {
            this.$store.commit('page-show-avatar');
            this.$store.commit('page-update-title', post.title);
            this.$store.commit('page-update-subtitle', post.date);
            this.$store.commit('blog-update-post', post);
          });
        }
      })
    }
  },
  mounted() {
    this.getPost(this.$route.params.year, this.$route.params.slug);
  },
  computed: {
    post() {
      return this.$store.state.blog.post;
    }
  }
}
</script>

<style scoped>

</style>
