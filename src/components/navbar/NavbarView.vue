<template>
  <div class="flex flex-row">
    <div class="p-5 flex items-center space-x-20 w-5/6 border-b-2">
      <div class="bg-green-800 text-white rounded-md font-medium p-3">Mubii Discovery</div>
      <div class="">
        <ul class="flex flex-row space-x-15">
          <li
            class="cursor-pointer border transition duration-150 border-white hover:border-black hover:bg-green-600 p-2"
          >
            <a href="/">Home</a>
          </li>
          <li
            class="cursor-pointer border transition duration-150 border-white hover:border-black hover:bg-green-600 p-2"
          >
            <a href="/about">About</a>
          </li>
          <li
            class="cursor-pointer border transition duration-150 border-white hover:border-black hover:bg-green-600 p-2"
          >
            <a href="">Services</a>
          </li>
          <li
            class="cursor-pointer border transition duration-150 border-white hover:border-black hover:bg-green-600 p-2"
          >
            <a href="">Pricing</a>
          </li>
          <li
            class="cursor-pointer border transition duration-150 border-white hover:border-black hover:bg-green-600 p-2"
          >
            <a href="">Contact</a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="cursor-pointer p-5 w-1/6 border-b-2 border-l-2 content-center flex items-center justify-center space-x-3 group hover:bg-green-600 transition duration-150 dropdown dropdown-end"
    >
      <div v-if="store.getToken" class="flex items-center gap-5">
        <div class="group-hover:text-white">{{ userData.name }}</div>
        <div class="">
          <div tabindex="0" role="button" class="">
            <div class="w-10">
              <img
                class="rounded-xl"
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content bg-green-700 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li class="">
              <a class="text-white hover:bg-green-800" href="/user/profile">
                Profile
                <!-- <span class="badge">New</span> -->
              </a>
            </li>
            <li><a class="text-white hover:bg-green-800">Settings</a></li>
            <li><a class="text-white hover:bg-green-800" @click="handleLogout()">Logout</a></li>
          </ul>
        </div>
      </div>
      <a href="/login" v-else class="group-hover:text-white"> Sign in </a>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/store'
const store = useUserStore()
const handleLogout = () => {
  store.logout()
}
const userData = store.userData
</script>

<style></style>
