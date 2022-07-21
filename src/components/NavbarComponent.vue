<template>
  <div>
    <div class="nav">
      <div class="">
        <ul class="flex justify-between">
          <li class="m-3 inline">
            <router-link class="text-white" to="/">Home</router-link>
          </li>
          <li class="m-3 inline">
            <router-link class="text-white" to="/backgroundimage">
              Background Image Page</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white" to="/imagesliderpage">
              Image Slider Page</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white" to="/infocards"
              >Info Cards</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white" to="/flipcard"
              >Flip Cards</router-link
            >
          </li>
          <li class="m-3 inline">
            <router-link class="text-white" to="/hamburgermenu"
              >Hamburger Menu</router-link
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
