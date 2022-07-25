<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
      <div class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-1/2">
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              v-bind:src="require('/src/assets/Images/gallery_1.jpg')"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              v-bind:src="require('/src/assets/Images/gallery_2.jpg')"
            />
          </div>
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              v-bind:src="require('/src/assets/Images/gallery_3.jpg')"
            />
          </div>
        </div>
        <div class="flex flex-wrap w-1/2">
          <div class="w-full p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              v-bind:src="require('/src/assets/Images/gallery_4.jpg')"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              v-bind:src="require('/src/assets/Images/gallery_5.jpg')"
            />
          </div>
          <div class="w-1/2 p-1 md:p-2">
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full rounded-lg"
              v-bind:src="require('/src/assets/Images/gallery_6.jpg')"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "GalleryComponent",
};
</script>

<style lang="scss" scoped></style>
