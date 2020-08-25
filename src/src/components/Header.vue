<template>
  <header class="header">
    <div class="container mx-auto px-2">
      <div class="flex items-center justify-between py-4">
        <div class="header__logo"><logo></logo></div>
        <div>
          <div class="header__links">
            <a href="#" class="header__link">About</a>
            <a href="#" class="header__link">Projects</a>
            <a href="#" class="header__link">Contact</a>
          </div>
          <div class="header__mobile">
            <mobile-menu-button @click="toggleMobileMenu()"></mobile-menu-button>
          </div>
        </div>
      </div>

      <div class="pt-20 pb-32 text-center text-white">
        <img src="../assets/avatar.jpg" alt="" class="header__avatar"/>
        <span class="block text-6xl font-light">Hello world!</span>
        <span class="block text-4xl font-bold">I'm a software developer</span>
      </div>
    </div>
    <div class="header__divider"></div>
    <mobile-menu ref="mobileMenu"></mobile-menu>
  </header>
</template>

<script>
import MobileMenu from "@/components/MobileMenu";
import Logo from "@/components/Logo";
import MobileMenuButton from "@/components/MobileMenuButton";

export default {
  name: 'Header',
  components: {
    MobileMenuButton,
    MobileMenu,
    Logo
  },
  methods: {
    toggleMobileMenu: function () {
      console.log(this.$refs.mobileMenu.toggleMenu());
    }
  }
}
</script>

<style scoped>
.header {
  @apply bg-blue-800 relative;
}

.header__links {
  @apply hidden my-4;
}

.header__link {
  @apply block mx-2 py-2 px-4 text-white uppercase font-bold text-sm;
}

.header__avatar {
  @apply rounded-full mx-auto;
  width: 80px;
}

.header__divider {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 5vh;
  pointer-events: none;
  mask-image: url("data:image/svg+xml;utf8,%3csvg viewBox='0 0 100 100' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'%3e%3cpath d='M0,0 C16.6666667,66 33.3333333,98 50,98 C66.6666667,98 83.3333333,66 100,0 L100,100 L0,100 L0,0 Z' fill='%23fff'/%3e%3c/svg%3e");
  mask-size: 100% 101%;
  background: white;
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
