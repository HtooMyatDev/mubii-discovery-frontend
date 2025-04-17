<template>
  <div class="h-screen w-full flex flex-col items-center">
    <div class="bg-green-800 shadow-xl h-1/3 w-full"></div>
    <div
      class="wrapper w-1/2 h-120 shadow-lg bg-white rounded-lg -mt-25 pt-15 flex flex-col items-center"
    >
      <div class="top-wrapper flex justify-center md:gap-60">
        <div class="">
          <a href="/" class="hover:text-green-800 p-3 rounded-xl group">
            <i class="fa-solid fa-arrow-left group-hover:-translate-x-1 duration-400"></i>
            Back
          </a>
        </div>
        <div
          class="w-50 h-50 border-2 -mt-25 border-gray-100 rounded-full overflow-hidden shadow-md"
        >
          <img
            src="../../../public/profile/download.jpeg"
            alt=""
            class="w-full h-full object-cover"
          />
        </div>
        <div class="">World</div>
      </div>
      <div class="mt-5 text-center">
        <h2 class="text-4xl">
          {{ userData.name }} <span v-if="userData.nickname">{{ userData.nickname }}</span>
        </h2>
        <div class="mt-3 text-gray-500">
          <div class="flex justify-center items-center gap-2">
            <i class="fa-solid fa-location-dot text-sm"></i>
            <h5 class="text-md">Address</h5>
          </div>
          <p class="text-sm" v-if="userData.city">
            {{ userData.postal_code }},
            {{ userData.city }}
          </p>
          <p v-else>-</p>
        </div>
        <div class="w-full flex mt-2 text-gray-500 justify-center items-center gap-5">
          <div class="">
            <div class="flex items-center justify-center gap-2">
              <i class="fa-solid fa-phone text-sm"></i>
              <h5 class="text-md">Ph number</h5>
            </div>
            <p v-if="userData.phone_number">{{ userData.phone_number }}</p>
            <p v-else>-</p>
          </div>
          <div class="">
            <div class="flex items-center justify-center gap-2">
              <i class="fa-solid fa-cake-candles text-sm"></i>
              <h5 class="text-md">Date of birth</h5>
            </div>
            <p v-if="userData.date_of_birth">{{ userData.date_of_birth }}</p>
            <p v-else>-</p>
          </div>
        </div>
      </div>
      <div class="flex gap-5 mt-5 text-sm">
        <label
          class="p-2 has-checked:bg-green-800 has-checked:text-white has-checked:border-black has-checked:border-1 duration-300 border-1 border-white"
        >
          View profile
          <input value="view" type="radio" v-model="picked" hidden />
        </label>

        <label class="p-2 has-checked:bg-green-800 has-checked:text-white has-checked:border-black has-checked:border-1 duration-300 border-1 border-white">
          Edit profile
          <input value="edit" type="radio" v-model="picked" hidden />
        </label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/store'

const store = useUserStore()
const userData = store.userData
const picked = ref('view')
</script>

<style></style>
