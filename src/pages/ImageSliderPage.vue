<template>
  <div class="home w-full h-screen">
    <div class="flex items-center justify-center">
      <ImageSlider />
    </div>
  </div>
</template>
<script>
import ImageSlider from "../components/ImageSlider.vue";

export default {
  name: "ImageSliderPage",
  components: {
    ImageSlider,
  },
};
</script>
<style></style>
