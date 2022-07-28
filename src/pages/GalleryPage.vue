<template>
  <div class="home h-full w-full">
    <div class="pb-6">
      <GalleryComponent />
      <GalleryComponent />
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
