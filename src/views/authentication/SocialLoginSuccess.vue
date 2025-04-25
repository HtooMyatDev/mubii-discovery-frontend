<template class="">
  <div class="flex justify-center items-center h-screen bg-green-700 dark:bg-gray-900">
    <div
      class="w-200 px-10 py-15 bg-white border border-gray-200 rounded-xl shadow-white dark:bg-gray-800 dark:border-gray-700 flex flex-col items-center"
    >
      <i
        class="fa-solid fa-check text-2xl border-4 p-5 rounded-full mb-4 text-green-500 dark:text-shadow-green-700"
      ></i>
      <a href="">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-800 dark:text-white">
          Login Successful
        </h5>
      </a>
      <p class="mb-5 font-normal text-gray-500 dark:text-gray-400 text-center">
        You have successfully signed into your account. You can close this window and explore the
        features.
      </p>
      <a
        href="/"
        class="flex w-100 justify-center items-center py-2 text-sm font-medium text-white bg-shadow-green-700 rounded-lg hover:bg-shadow-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Back to home
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
      <span class="text-gray-500 mt-3">redirecting back to home page in {{ seconds }}s</span>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/store'
import { useRoute, useRouter } from 'vue-router'
import { onMounted, onUnmounted, ref } from 'vue'

const store = useUserStore()
const route = useRoute()
const router = useRouter()
const seconds = ref(5)
let intervalId = null

store.setToken(route.query.token)
store.setUserData(JSON.parse(route.query.data))
store.setMovieData(JSON.parse(route.query.movie))

onMounted(() => {
  intervalId = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
    } else {
      clearInterval(intervalId)
      router.push({ name: 'home' })
    }
  }, 1000)
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style></style>
