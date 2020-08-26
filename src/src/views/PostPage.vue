<template>
  <div>
    <div>Year: {{ post }}</div>
    <div>Slug: {{ slug }}</div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  data() {
    return {
      post: {},
      year: '',
      slug: ''
    };
  },
  methods: {
    getPost(year, slug) {
      fetch(`/posts/${year}/${slug}.json`).then((response) => {
        if (response.status === 200) {
          response.json().then((post) => this.post = post);
        }
      })
    }
  },
  mounted() {
    this.getPost(this.$route.params.year, this.$route.params.slug);
  }
}
</script>

<style scoped>

</style>
