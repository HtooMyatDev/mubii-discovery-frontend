<template>
  <div class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="bg-gray-200 max-w-4xl shadow-lg p-5 rounded-2xl flex gap-5">
      <!-- signup form -->
      <div class="md:w-1/2 p-10">
        <h1 class="font-bold text-2xl text-amber-700">Register</h1>
        <p class="text-amber-700 text-sm mt-4">
          If you are a new user, register now to get the features
        </p>

        <form action="" @submit.prevent="" class="flex flex-col gap-4 mt-3">
          <div class="">
            <div class="relative">
              <input
                type="text"
                placeholder="Name"
                class="w-full border p-2 rounded-xl"
                v-model="userData.name"
              />
              <i class="fas fa-user absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"></i>
            </div>
            <small v-if="validation.name" class="text-red-600" style="font-size: 12px"
              >The name field is required</small
            >
          </div>
          <div class="">
            <div class="relative">
              <input
                type="email"
                placeholder="Email"
                class="w-full border p-2 mt-1 rounded-xl"
                v-model="userData.email"
              />
              <i
                class="fas fa-envelope absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
              ></i>
            </div>
            <small v-if="validation.email" class="text-red-600" style="font-size: 12px"
              >The email field is required</small
            >
          </div>
          <div class="">
            <div class="relative">
              <input
                type="password"
                class="w-full border p-2 rounded-xl"
                placeholder="Password"
                v-model="userData.password"
              />
              <i
                class="fa-solid fa-lock absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"
              ></i>
            </div>
            <small v-if="validation.password" class="text-red-600" style="font-size: 12px"
              >The password field is required</small
            >
          </div>
          <div class="">
            <div class="relative">
              <input
                type="password"
                placeholder="Confirm password"
                class="w-full border p-2 mt-1 rounded-xl"
                v-model="userData.confirmPassword"
              />
              <i class="fas fa-lock absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"></i>
            </div>
            <small v-if="validation.confirmPassword" class="text-red-600" style="font-size: 12px"
              >The confirm password field is required</small
            >
            <small
              v-if="!validation.confirmPassword && validation.samePassword"
              class="text-red-600"
              >The password and confirm password must be the same</small
            >
            <!-- fix the validation and v-model the input(s) -->
          </div>
          <button
            @click="register()"
            class="bg-amber-700 text-white p-2 rounded-xl border-2 duration-300 cursor-pointer hover:bg-white hover:border-amber-700 hover:text-amber-700 outline-none focus:ring-2 focus:ring-amber-700"
          >
            Register
          </button>
        </form>

        <div class="mt-5 grid grid-cols-3 items-center text-gray-500">
          <hr class="border-gray-500" />
          <p class="text-center">or</p>
          <hr class="border-gray-500" />
        </div>

        <!-- social login -->

        <button
          class="flex items-center justify-center gap-5 bg-white cursor-pointer p-2 w-full mt-5 rounded-xl border-2 duration-300 border-white hover:border-black"
          @click="socialLogin('google')"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 48 48"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          Continue with Google
        </button>

        <button
          class="flex items-center justify-center gap-5 bg-black cursor-pointer text-white p-2 w-full mt-3 rounded-xl duration-300 border-2 hover:bg-white hover:text-black hover:border-black"
          @click="socialLogin('github')"
        >
          <i class="fa-brands fa-github"></i>
          Continue with Github
        </button>
      </div>

      <!-- features for signing up -->
      <div class="md:block hidden w-1/2">
        <div class="bg-amber-700 flex flex-col rounded-xl justify-center items-center p-4 gap-3">
          <h1 class="text-white font-bold text-xl">Features</h1>
          <div
            class="w-full bg-white text-amber-700 border-2 p-2 shadow-sm shadow-white flex gap-3 items-center justify-start"
          >
            <i class="fa-solid fa-star"></i>
            <p>Give a rating to movies</p>
          </div>

          <div
            class="w-full bg-white text-amber-700 border-2 p-2 shadow-sm shadow-white flex gap-3 items-center justify-start"
          >
            <i class="fa-solid fa-bookmark"></i>
            <p>Add to watch-list</p>
          </div>

          <div
            class="bg-white w-full text-amber-700 border-2 p-2 shadow-sm flex gap-3 items-center shadow-white justify-start"
          >
            <i class="fa-solid fa-comments"></i>
            <p>Comment & reply</p>
          </div>

          <div
            class="bg-white w-full text-amber-700 border-2 p-2 shadow-sm shadow-white flex items-center gap-3 justify-start"
          >
            <i class="fa-solid fa-thumbs-up"></i>
            <p>Give a review to movies</p>
          </div>

          <div
            class="bg-white text-amber-700 border-2 w-full p-2 shadow-sm shadow-white flex items-center gap-3 justify-start"
          >
            <i class="fa-solid fa-hand-holding-hand"></i>
            <p>Movie recommendations for you</p>
          </div>
        </div>
        <p class="text-center mt-5 text-md">
          Already have an account? <a href="/login" class="font-semibold text-amber-700">Login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../../store/store'

const store = useUserStore()
const router = useRouter()
const userData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const validation = ref({
  name: false,
  email: false,
  password: false,
  confirmPassword: false,
  samePassword: false,
})

const emptyFields = () => {
  userData.value.password = ''
  userData.value.confirmPassword = ''
}

function checkFormValidation() {
  validation.value.name = userData.value.name === '' ? true : false
  validation.value.email = userData.value.email === '' ? true : false
  validation.value.password = userData.value.password === '' ? true : false
  validation.value.confirmPassword = userData.value.confirmPassword === '' ? true : false
  validation.value.samePassword =
    userData.value.password !== userData.value.confirmPassword ? true : false
}

const register = () => {
  checkFormValidation()
  if (
    !validation.value.name &&
    !validation.value.email &&
    !validation.value.password &&
    !validation.value.confirmPassword &&
    !validation.value.samePassword
  ) {
    axios
      .post('http://localhost:8000/api/auth/register', userData.value)
      .then((response) => {
        store.setToken(response.data.token)
        store.setUserData(response.data.user)
        store.setMovieData(response.data.movie)

        router.push({ name: 'home' })
      })
      .catch((error) => {
        console.log(error)
        router.push({
          path: '/social-login-failure',
          query: { error: 'This email is already associated with the existing account.' },
        })
      })
  } else {
    emptyFields()
  }
}
</script>
