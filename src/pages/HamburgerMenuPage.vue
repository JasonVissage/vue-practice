<template>
  <div class="home h-screen w-full">
    <HamburgerMenu />
  </div>
</template>

<script>
import HamburgerMenu from "../components/HamburgerMenu.vue";
export default {
  name: "HamburgerMenuPage",
  components: {
    HamburgerMenu,
  },
};
</script>

<style lang="scss" scoped></style>
