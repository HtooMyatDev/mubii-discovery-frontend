<template>
  <div class="relative h-500">
    <div
      class="flex flex-col justify-between h-screen sticky top-0 left-0 p-5 text-white bg-black w-25 hover:w-40 group/item duration-300"
    >
      <!-- Top -->
      <div class="flex flex-col gap-3 duration-300 opacity-0 group-hover/item:opacity-100">
        <a href="/user/profile" v-if="store.token">
          <img :src="profileURL" class="w-10 h-10 object-cover rounded-full" />
        </a>

        <SidebarItem icon="bookmark" text="List" to="/" />
      </div>

      <!-- Middle -->
      <div class="flex flex-col gap-7 ms-5 group-hover/item:ms-0 duration-300">
        <SidebarItem icon="magnifying-glass" text="Search" to="/" />
        <SidebarItem icon="house" text="Home" to="/" />
        <SidebarItem icon="tape" text="Series" to="/movies" />
        <SidebarItem icon="film" text="Movies" to="/" />
        <SidebarItem icon="tag" text="Categories" to="/" />
      </div>
      <!-- Bottom -->
      <div class="duration-300 opacity-0 group-hover/item:opacity-100 flex flex-col gap-5">
        <SidebarItem icon="gear" text="settings" to="/" />
        <button
          class="flex items-center justify-center gap-2 text-sm bg-amber-800 text-white hover:bg-amber-900 duration-300 rounded-md w-full py-2 px-3 cursor-pointer"
          @click="handleLogout()"
          v-if="store.token"
        >
          <i class="fa-solid fa-right-from-bracket"></i>Logout
        </button>
        <a
          v-else
          href="/login"
          class="flex items-center justify-center gap-2 text-sm bg-amber-800 text-white hover:bg-amber-900 duration-300 rounded-md py-2 px-3 cursor-pointer"
        >
          <i class="fa-solid fa-right-from-bracket"></i>Login
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/store'
import SidebarItem from './SidebarItem.vue'
import { ref } from 'vue'
const store = useUserStore()
const handleLogout = () => {
  store.logout()
}
const userData = store.userData

const profileURL = ref(
  userData.profile ? `http://localhost:8000${userData.profile}` : '/profile/default.jpg'
)
</script>

<style></style>
