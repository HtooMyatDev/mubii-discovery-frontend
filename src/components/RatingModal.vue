<template>
  <dialog class="modal">
    <div class="modal-box bg-black border-2 shadow-sm border-amber-800">
      <h3 class="text-lg font-bold text-white">Rate this 1 to 5!</h3>
      <div class="flex text-6xl text-amber-800 gap-3 items-center mt-3">
        <span v-for="star in count" :key="star" @click="showStar(star)">
          <i v-if="star >= count" class="fa-solid fa-star"></i>
          <i v-if="star <= count" class="fa-regular fa-star"></i>
        </span>
        <!-- <i class="fa-regular fa-star"></i> -->
        <!-- <span v-for="star in 5 - count" :key="star" @click="showStar(star)">
          <i class="fa-regular fa-star"></i>
        </span> -->
      </div>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button
            class="bg-amber-800 outline-none p-2 rounded-lg hover:bg-amber-900 duration-200 cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(5)

const showStar = (star) => {
  count.value = star
}
</script>

<style>
</style>
