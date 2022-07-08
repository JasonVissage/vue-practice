<template>
  <div class="flex justify-center mt-4 relative">
    <a href="">
      <div
        class="bg-green-400 block p-6 mr-4 ml-4 hover:bg-green-200 shadow-md border border-white rounded-lg max-w-sm text-center"
      >
        <img
          v-bind:src="require('/src/assets/Images/card1.jpg')"
          class="h-48 w-96"
        />
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          Some Mountains
        </h5>
        <p class="font-normal text-gray-700">
          These are pretty cool mountains.
        </p>
      </div>
    </a>
    <a href="">
      <div
        class="bg-green-400 block p-6 mr-4 hover:bg-green-200 shadow-md border border-white rounded-lg max-w-sm text-center"
      >
        <img
          v-bind:src="require('/src/assets/Images/card2.jpg')"
          class="h-48 w-96"
        />
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          Sunset
        </h5>
        <p class="font-normal text-gray-700">
          Nice little sunset over the water.
        </p>
      </div>
    </a>
    <a href="">
      <div
        class="bg-green-400 block p-6 mr-4 hover:bg-green-200 shadow-md border border-white rounded-lg max-w-sm text-center"
      >
        <img
          v-bind:src="require('/src/assets/Images/card3.jpg')"
          class="h-48 w-96"
        />
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          Rocks
        </h5>
        <p class="font-normal text-gray-700">Rocks on a beach somewhere.</p>
      </div>
    </a>
    <a href="">
      <div
        class="bg-green-400 block p-6 mr-4 hover:bg-green-200 shadow-md border border-white rounded-lg max-w-sm text-center"
      >
        <img
          v-bind:src="require('/src/assets/Images/card4.jpg')"
          class="h-48 w-96"
        />
        <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
          Stalagmites
        </h5>
        <p class="font-normal text-gray-700">
          Or stalactites, I forget which is which.
        </p>
      </div>
    </a>
  </div>
</template>
<script>
export default {
  name: "InfoCards",
};
</script>
<style></style>
