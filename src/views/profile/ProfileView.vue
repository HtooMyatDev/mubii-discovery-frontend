<template>
  <div class="h-screen w-full flex flex-col items-center">
    <div class="bg-green-800 shadow-xl h-1/3 w-full"></div>
    <div
      class="wrapper w-1/2 h-130 shadow-lg bg-white rounded-lg -mt-25 pt-15 flex flex-col items-center"
    >
      <div class="top-wrapper flex justify-center md:gap-60">
        <div class="">
          <a href="/" class="hover:text-green-800 group">
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
        <a href="" class="hover:text-green-800">
          <i class="fa-solid fa-bookmark duration-400"></i> Watch list</a
        >
      </div>
      <!-- displays only when the user chooses the view profile option -->
      <div class="mt-5 text-center" v-if="picked === 'view'">
        <h2 class="text-4xl">
          {{ userData.name }} <span v-if="userData.nickname">{{ userData.nickname }}</span>
        </h2>
        <div class="w-85 flex mt-3 text-gray-500 justify-start items-center gap-5">
          <div class="mt-3 w-1/2 text-gray-500 flex flex-col items-start">
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

          <div class="mt-3 w-1/2 text-gray-500 flex flex-col items-start">
            <div class="flex justify-center items-center gap-2">
              <i class="fa-solid fa-envelope text-sm"></i>
              <h5 class="text-md">Email</h5>
            </div>
            <p class="text-sm" v-if="userData.email">
              {{ userData.email }}
            </p>
            <p v-else>-</p>
          </div>
        </div>
        <div class="w-full flex mt-4 text-gray-500 justify-start items-center gap-5">
          <div class="w-1/2 flex flex-col items-start">
            <div class="flex items-center justify-center gap-2">
              <i class="fa-solid fa-phone text-sm"></i>
              <h5 class="text-md">Ph number</h5>
            </div>
            <p v-if="userData.phone_number" class="text-start">{{ userData.phone_number }}</p>
            <p v-else class="inline-flex justify-center">-</p>
          </div>
          <div class="w-1/2 flex flex-col items-start">
            <div class="flex items-center justify-center gap-2">
              <i class="fa-solid fa-cake-candles text-sm"></i>
              <h5 class="text-md">Birthday</h5>
            </div>
            <p v-if="userData.date_of_birth">{{ userData.date_of_birth }}</p>
            <p v-else>-</p>
          </div>
        </div>
      </div>
      <!-- displays when user chooses the edit profile option-->
      <div class="" v-else>
        <div class="flex flex-col items-center mt-5">
          <label class="font-medium">Name</label>
          <div class="flex">
            <span
              class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2 border border-e-0 border-green-800 text-sm bg-green-800"
            >
              <i class="fa-solid fa-circle-user text-sm"></i>
            </span>
            <input
              type="text"
              class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
              :value="userData.name"
              placeholder="name..."
            />
          </div>
        </div>
        <div class="flex gap-5 w-full">
          <div class="flex flex-col mt-3">
            <label class="font-medium">Address</label>
            <div class="flex">
              <span
                class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2.5 border border-e-0 border-green-800 text-sm bg-green-800"
              >
                <i class="fa-solid fa-location-dot text-sm"></i>
              </span>
              <input
                type="text"
                class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                :value="userData.city"
                placeholder="city..."
              />
            </div>
          </div>

          <div class="flex flex-col mt-3">
            <label class="font-medium">Email</label>
            <div class="flex">
              <span
                class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2 border border-e-0 border-green-800 text-sm bg-green-800"
              >
                <i class="fa-solid fa-envelope text-sm"></i>
              </span>
              <input
                type="text"
                class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                :value="userData.email"
              />
            </div>
          </div>
        </div>

        <div class="flex gap-5 w-full">
          <div class="flex flex-col mt-3">
            <label class="font-medium">Ph number</label>
            <div class="flex">
              <span
                class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2 border border-e-0 border-green-800 text-sm bg-green-800"
              >
                <i class="fa-solid fa-phone text-sm"></i>
              </span>
              <input
                type="text"
                class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                :value="userData.phone_number"
                placeholder="phone number..."
              />
            </div>
          </div>

          <div class="flex flex-col mt-3">
            <label class="font-medium">Date of birth</label>
            <div class="flex">
              <span
                class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2.5 border border-e-0 border-green-800 text-sm bg-green-800"
              >
                <i class="fa-solid fa-calendar-days text-sm"></i>
              </span>
              <input
                type="text"
                class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                :value="userData.date_of_birth"
                placeholder="birthday..."
              />
            </div>
          </div>
        </div>
        <button class="w-full mt-5 bg-green-800 text-center text-white p-1.5 rounded-md hover:bg-gray-100 hover:text-green-800 border-2 hover:border-green-800 duration-300 cursor-pointer outline-none">Update</button>
      </div>
      <div class="flex gap-5 mt-5 text-sm">
        <label
          class="p-2 cursor-pointer rounded-md has-checked:bg-green-800 has-checked:text-white has-checked:border-black has-checked:border-1 duration-300 border-1 border-white"
        >
          View profile
          <input value="view" type="radio" v-model="picked" hidden />
        </label>

        <label
          class="p-2 cursor-pointer rounded-md has-checked:bg-green-800 has-checked:text-white has-checked:border-black has-checked:border-1 duration-300 border-1 border-white"
        >
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
