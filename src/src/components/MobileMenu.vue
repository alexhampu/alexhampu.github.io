<template>
  <div class="mobile-menu" :class="classList">
    <div class="mobile-menu__backdrop" @click="toggleMenu()"></div>
    <div class="mobile-menu__container">
      <div class="my-4 flex justify-between px-4">
        <div>
          <logo></logo>
        </div>
        <div>
          <mobile-menu-button @click="toggleMenu()"></mobile-menu-button>
        </div>
      </div>

      <div>

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
      mobileMenuActive: false
    }
  },
  methods: {
    toggleMenu: function () {
      this.mobileMenuActive = !this.mobileMenuActive;
    }
  },
  computed: {
    classList: function () {
      return {
        'mobile-menu--active': this.mobileMenuActive
      }
    }
  }
}
</script>

<style scoped>
.mobile-menu {
  @apply fixed top-0 left-0 w-screen h-screen invisible;
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
}

.mobile-menu--active .mobile-menu__container {
  @apply translate-x-0;
}

@screen md {
  .mobile-menu {
    @apply hidden;
  }
}
</style>
