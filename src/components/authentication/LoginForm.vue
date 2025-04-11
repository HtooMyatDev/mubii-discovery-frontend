<template>
  <div class="bg-gray-100 flex items-center justify-center min-h-screen">
    <!-- login container -->
    <div class="bg-gray-200 max-w-3xl shadow-lg flex p-5 rounded-2xl">
      <!-- login form -->
      <div class="md:w-1/2 p-10">
        <h1 class="font-bold text-2xl text-[#054527]">Login</h1>
        <p class="text-sm mt-4 text-[#054527]">If you are already a member, easily log in</p>

       <AppAlert v-if="!status"    message="The credentials do not match."/>
          <form action="" class="flex flex-col gap-4" @submit.prevent="">

          <input type="email" class="border p-2 mt-3 rounded-xl" placeholder="Email" v-model="userData.email" />

          <small v-if="validation.email" class="duration-300 text-red-600"
            >The email field is required.</small
          >
          <div class="relative">
            <input type="password" class="w-full border p-2 rounded-xl" placeholder="Password" v-model="userData.password" />
            <i class="fa-solid fa-eye absolute right-3 top-1/2 -translate-y-1/2 text-gray-700"></i>
          </div>
          <small v-if="validation.password" class="duration-300 text-red-600"
            >The password field is required.</small
          >
          <button
            class="bg-[#054527] text-white p-2 rounded-xl border-2 duration-300 cursor-pointer outline-none focus:ring-2 focus:ring-[#054527] hover:text-[#054527] hover:bg-white hover:border-[#054527]"
            @click="loginProcess()"
          >
            Login
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
      <!-- image -->
      <div class="md:block hidden w-1/2">
        <img src="./url/MubiiDiscoveryLogo.png" class="rounded-xl" />
        <p class="text-md mt-5 text-center">Haven't made an account yet? <a class="text-[#054527] font-semibold register-link" href="/signup">Register</a></p>

      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import AppAlert from '../AppAlert.vue'
import { useUserStore } from '../../store/store'
import { useRouter } from 'vue-router'

const store = useUserStore()

const router = useRouter()

const userData = ref({
  email: '',
  password: '',
})
console.log(userData.value.email)
const status = ref(true)

const validation = ref({
  email: false,
  password: false,
})

const loginProcess = () => {
  validation.value.email = userData.value.email === '' ? true : false
  validation.value.password = userData.value.password === '' ? true : false

  if (!validation.value.email && !validation.value.password) {
    axios
      .post('http://localhost:8000/api/auth/login', userData.value)
      .then((response) => {
        store.setUserData(response.data.user)
        store.setToken(response.data.token)
        router.push({ name: 'home' })
      })
      .catch((error) => {
        console.log(error)
        status.value = false
        userData.value.password = ''
      })
  }
}

const socialLogin = async (provider) => {
  window.location.href = `http://localhost:8000/auth/${provider}/redirect`
}
</script>

