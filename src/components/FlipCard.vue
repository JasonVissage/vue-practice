<template>
  <div class="flipcard">
    <p class="">Hello World</p>
    <InfoCard
      :frontType="text"
      :frontTitle="front.title"
      :frontData="front.message"
      :backTitle="back.title"
      :backData="back.message"
    />
  </div>
</template>

<script>
import InfoCard from "vue-info-card";

export default {
  name: "FlipCard",
  components: {
    InfoCard,
  },
  data() {
    return {
      front: {
        title: "Daily Conversion Value",
        message: "This is the front body",
      },
      back: {
        title: "Monthly Summary",
        message:
          "Your average daily conversion value for this month is <b>50.4$</b>. It is below the average of the last six months.",
      },
    };
  },
};
</script>
