<template>
  <div class="home bg-cover h-screen border-8 absolute">
    <NavComponent />
    <BackgroundImage />
    <InfoCards />
    <ImageSlider />
  </div>
</template>
<script>
import BackgroundImage from "../components/BackgroundImage.vue";
import NavComponent from "../components/NavComponent.vue";
import InfoCards from "../components/InfoCards.vue";
import ImageSlider from "../components/ImageSlider.vue";

export default {
  name: "HomePage",
  components: {
    BackgroundImage,
    NavComponent,
    InfoCards,
    ImageSlider,
  },
};
</script>
<style></style>
