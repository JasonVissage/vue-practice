<template>
  <div class="home h-screen w-full">
    <div>
      <GalleryComponent />
    </div>
  </div>
</template>

<script>
import GalleryComponent from "../components/GalleryComponent.vue";
export default {
  name: "GalleryPage",
  components: {
    GalleryComponent,
  },
};
</script>

<style lang="scss" scoped></style>
