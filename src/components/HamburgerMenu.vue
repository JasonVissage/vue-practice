<template>
  <!-- <div class="text-white flex justify-center items-center h-full w-full">
    <button class="">
      <div class="p-4 space-y-2 bg-white rounded shadow">
        <span class="block w-8 h-0.5 bg-gray-500 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-500 animate-pulse"></span>
        <span class="block w-8 h-0.5 bg-gray-500 animate-pulse"></span>
      </div>
    </button>
  </div> -->

  <div @click="toggleNav" class="flex md:hidden">
    <button
      type="button"
      class="text-blue-800 have:text-gray-400 focus:outline-none focus:text-blue-400"
      aria-label="toggle menu"
    >
      <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
        <path
          fill-rule="evenodd"
          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNav: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
