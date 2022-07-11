<template>
  <div class="home w-full h-screen">
    <div class="flex items-center justify-center">
      <InfoCards />
    </div>
  </div>
</template>
<script>
import InfoCards from "../components/InfoCards.vue";

export default {
  name: "HomePage",
  components: {
    InfoCards,
  },
};
</script>
<style></style>
