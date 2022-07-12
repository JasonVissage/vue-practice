<template>
  <div class="home w-full h-screen">
    <div class="flex items-center justify-center">
      <FlipCard />
    </div>
  </div>
</template>
<script>
import FlipCard from "../components/FlipCard.vue";

export default {
  name: "FlipCardPage",
  components: {
    FlipCard,
  },
};
</script>
<style></style>
