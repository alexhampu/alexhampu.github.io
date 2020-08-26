import { createStore } from 'vuex'

export default createStore({
  state: {
    page: {
      avatar: false,
      title: '',
      subtitle: ''
    },
    blog: {
      posts: [],
      post: {}
    }
  },
  mutations: {
    // Page
    'page-show-avatar': ((state) => state.page.avatar = true),
    'page-hide-avatar': ((state) => state.page.avatar = false),
    'page-update-title': ((state, payload) => state.page.title = payload),
    'page-update-subtitle': ((state, payload) => state.page.subtitle = payload),

    // Blog
    'blog-update-posts': ((state, payload) => state.blog.posts = payload),
    'blog-update-post': ((state, payload) => state.blog.post = payload),
  },
  actions: {
    'blog-get-posts': ({commit}) => {
      fetch(`/posts/index.json`).then((response) => {
        if (response.status === 200) {
          response.json().then((posts) => {
            commit('blog-update-posts', posts);
          });
        }
      })
    }
  },
  modules: {
  }
})
