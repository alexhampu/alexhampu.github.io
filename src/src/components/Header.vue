<template>
  <header class="header">
    <div class="container mx-auto relative z-20">
      <div class="flex items-center justify-between py-4">
        <div class="header__logo"><logo></logo></div>
        <div>
          <div class="header__links">
            <router-link to="/" class="header__link">About</router-link>
            <router-link to="/blog" class="header__link">Blog</router-link>
          </div>
          <div class="header__mobile">
            <mobile-menu-button></mobile-menu-button>
          </div>
        </div>
      </div>

      <div class="pt-20 pb-32 text-center text-white" v-if="title || subtitle">
        <img src="../assets/avatar.jpg" alt="" class="header__avatar" v-if="avatar"/>
        <span class="block text-6xl font-light" v-if="title">{{ title }}</span>
        <span class="block text-4xl font-bold" v-if="subtitle">{{ subtitle }}</span>
      </div>
    </div>
    <div class="header__divider"></div>
  </header>
</template>

<script>
import Logo from "@/components/Logo";
import MobileMenuButton from "@/components/MobileMenuButton";

export default {
  name: 'Header',
  components: {
    MobileMenuButton,
    Logo
  },
  methods: {
  },
  computed: {
    title() {
      return this.$store.state.page.title;
    },
    subtitle() {
      return this.$store.state.page.subtitle;
    },
    avatar() {
      return this.$store.state.page.avatar;
    }
  }
}
</script>

<style scoped>
.header {
  @apply bg-blue-700 relative;
}

.header::after {
  @apply absolute top-0 left-0 h-full w-full opacity-75 z-0;
  content: '';
  background: url('../assets/header_bg.png') no-repeat center;
  background-size: cover;
}

.header__links {
  @apply hidden my-4;
}

.header__link {
  @apply block mx-2 py-2 px-4 text-white uppercase font-bold text-sm;
}

.header__avatar {
  @apply rounded-full mx-auto select-none pointer-events-none;
  width: 80px;
}

.header__divider {
  @apply absolute bottom-0 left-0 w-full pointer-events-none bg-white z-10;
  height: 5vh;
  mask-image: url("data:image/svg+xml;utf8,%3csvg viewBox='0 0 100 100' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3e%3cpath d='M0,0 C16.6666667,66 33.3333333,98 50,98 C66.6666667,98 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z' fill='%23fff'/%3e%3c/svg%3e");
  mask-size: 100% 101%;
}

@screen md {
  .header__links {
    @apply flex;
  }

  .header__mobile {
    @apply hidden;
  }
}
</style>
