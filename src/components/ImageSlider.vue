<template>
  <div class="flex w-full h-screen justify-center items-center">
    <div class="flex items-center w-1/2 h-2/6 justify-center absolute">
      <transition-group name="fade" tag="div">
        <div class="" v-for="i in [currentIndex]" :key="i">
          <img class="rounded-md border-4 border-green-500" :src="currentImg" />
        </div>
      </transition-group>
      <div class="flex justify-between absolute w-full">
        <a class="ml-2 prev text-white" @click="prev" href="#">&#10094;</a>

        <a class="mr-2 next text-white" @click="next" href="#">&#10095;</a>
      </div>
    </div>
  </div>
</template>
<script>
import card1 from "../assets/Images/card1.jpg";
import card2 from "../assets/Images/card2.jpg";
import card3 from "../assets/Images/card3.jpg";
import card4 from "../assets/Images/card4.jpg";

export default {
  name: "ImageSlider",
  data() {
    return {
      images: [card1, card2, card3, card4],
      timer: null,
      currentIndex: 0,
    };
  },

  methods: {
    startSlide: function () {
      this.timer = setInterval(this.next, 4000);
    },
    next: function () {
      this.currentIndex += 1;
    },
    prev: function () {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function () {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
  },
};
</script>
