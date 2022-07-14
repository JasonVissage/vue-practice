<template>
  <div class="home w-full h-screen flex justify-center">
    <div class="mt-40">
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
