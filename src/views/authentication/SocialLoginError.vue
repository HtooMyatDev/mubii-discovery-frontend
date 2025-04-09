<template>
  <div class="flex justify-center items-center h-screen bg-green-700 dark:bg-gray-900">
    <div
      class="w-200 px-10 py-15 bg-white border border-gray-200 rounded-xl shadow-white dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center"
    >
      <i
        class="fa-solid fa-exclamation text-2xl border-4 px-7 py-5 rounded-full mb-4 text-red-500 dark:text-red-500"
      ></i>
      <a href="">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          Login Failed
        </h5>
      </a>
      <p class="mb-5 font-normal text-gray-500 dark:text-gray-400 text-center">
        {{ error }} Please try again.
      </p>
      <a
        href="/login"
        class="flex w-100 justify-center items-center py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Back to login
        <svg
          class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const error = route.query.error
</script>

<style></style>
