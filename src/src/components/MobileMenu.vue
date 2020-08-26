<template>
  <div class="mobile-menu" :class="classList">
    <div class="mobile-menu__backdrop" @click="toggleMenu()"></div>
    <div class="mobile-menu__container">
      <div class="mobile-menu__header">
        <div>
          <logo></logo>
        </div>
        <div>
          <mobile-menu-button></mobile-menu-button>
        </div>
      </div>

      <div>
        <div class="mobile-menu__links">
          <router-link to="/" class="mobile-menu__link">About</router-link>
          <router-link to="/blog" class="mobile-menu__link">Blog</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo';
import MobileMenuButton from "@/components/MobileMenuButton";

export default {
  name: 'MobileMenu',
  components: {
    MobileMenuButton,
    Logo
  },
  data: function () {
    return {
    }
  },
  computed: {
    mobileMenuActive() {
      return this.$store.state.mobile.menu;
    },
    classList: function () {
      return {
        'mobile-menu--active': this.mobileMenuActive
      }
    }
  },
  methods: {
    toggleMenu: function () {
      this.$store.commit('mobile-menu-toggle');
    }
  }
}
</script>

<style scoped>
.mobile-menu {
  @apply fixed top-0 left-0 w-screen h-screen invisible;
  transition: .2s visibility;
  z-index: 9000;
}

.mobile-menu--active {
  @apply visible;
}

.mobile-menu__backdrop {
  @apply absolute top-0 left-0 w-full h-full bg-blue-900 bg-opacity-50 z-0 opacity-0 transition duration-300 cursor-pointer;
}

.mobile-menu--active .mobile-menu__backdrop {
  @apply opacity-100;
}

.mobile-menu__container {
  @apply absolute top-0 left-0 w-full h-full bg-blue-900 z-10 shadow-lg transition duration-300 transform;
  --transform-translate-x: -32rem;
  max-width: 350px;
}

.mobile-menu--active .mobile-menu__container {
  @apply translate-x-0;
}

.mobile-menu__header {
  @apply my-4 flex justify-between px-4;
}

.mobile-menu__links {
  @apply px-4;
}

.mobile-menu__link {
  @apply block py-4 text-white;
}

@screen md {
  .mobile-menu {
    @apply hidden;
  }
}
</style>
