<template>
  <div class="relative h-500">
    <div
      class="flex flex-col justify-between h-screen sticky top-0 left-0 p-5 text-white bg-green-800 w-15 hover:w-40 group/item duration-300"
    >
      <!-- Top -->
      <div class="flex flex-col gap-3 duration-300 opacity-0 group-hover/item:opacity-100">
       <div class="flex items-center gap-3">
        <img src="../../../public/profile/default.jpg" class="rounded-full w-6">
        <span class="text-sm">Htoo Myat Aung</span>
       </div>
        <SidebarItem icon="bookmark" text="List" />
      </div>

      <!-- Middle -->
      <div class="flex flex-col gap-7">
        <SidebarItem icon="magnifying-glass" text="Search" />
        <SidebarItem icon="house" text="Home" />
        <SidebarItem icon="tape" text="Series" />
        <SidebarItem icon="film" text="Movies" />
        <SidebarItem icon="tag" text="Categories" />
      </div>
      <!-- Bottom -->
      <div class="duration-300 opacity-0 group-hover/item:opacity-100">
        <SidebarItem icon="gear" text="settings" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/store'
import SidebarItem from './SidebarItem.vue'
const store = useUserStore()
const handleLogout = () => {
  store.logout()
}
const userData = store.userData
</script>

<style></style>
