<template>
  <div class="home w-full h-full">
    <div class="pb-6">
      <InfoCards />
      <InfoCards />
      <InfoCards />
      <InfoCards />
      <InfoCards />
      <InfoCards />
    </div>
  </div>
</template>
<script>
import InfoCards from "../components/InfoCards.vue";

export default {
  name: "InfoCardsPage",
  components: {
    InfoCards,
  },
};
</script>
<style></style>
