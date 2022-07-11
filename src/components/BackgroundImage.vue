<template>
  <div class="flex h-screen justify-center items-center relative">
    <img
      class="object-scale-down h-48 w-96"
      v-bind:src="require('/src/assets/Images/circuits.jpg')"
    />
  </div>
</template>

<script>
export default {
  name: "BackgroundImage",
};
</script>
<style></style>
