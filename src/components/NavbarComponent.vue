<template>
  <div>
    <div class="nav">
      <div class="">
        <ul class="flex justify-between">
          <li class="m-3 inline">
            <router-link class="text-white hover:underline" to="/"
              >Home</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link
              class="text-white hover:underline"
              to="/backgroundimage"
            >
              Background Image Page</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link
              class="text-white hover:underline"
              to="/imagesliderpage"
            >
              Image Slider Page</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white hover:underline" to="/infocards"
              >Info Cards</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white hover:underline" to="/flipcard"
              >Flip Cards</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white hover:underline" to="/hamburgermenu"
              >Hamburger Menu</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white hover:underline" to="/gallerypage"
              >Gallery Page</router-link
            >
          </li>
        </ul>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarComponent",
};
</script>

<style lang="scss" scoped></style>
