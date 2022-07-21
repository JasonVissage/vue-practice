<template>
  <div class="w-60 h-80 relative">
    <div class="card w-full h-full transition border rounded absolute">
      <div class="front text-center absolute w-full h-full bg-gray-500">
        <img
          class="h-1/2"
          v-bind:src="require('/src/assets/Images/circuits.jpg')"
        />
        <h1 class="font-bold">Front Title</h1>
        <p class="m-2">
          Front details. This is a paragraph with all the details you might want
          on a card.
        </p>
      </div>
      <div class="back text-center absolute w-full h-full bg-gray-700">
        <h1 class="font-bold">Back Title</h1>
        <p>
          These are details for the back of the card. Bunch og things can be
          placed here. Lots of choices. Blah blah blah. Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Veritatis pariatur eius incidunt
          reiciendis iste esse architecto, mollitia assumenda sunt voluptatibus
          repellat magnam voluptatem inventore praesentium obcaecati sequi
          temporibus ipsam! Commodi!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FlipCard",
};
</script>
