<template>
  <Sidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
  <AuthButton style="margin: 1em 1.5em" />
</template>

<script setup>
import Sidebar from '@/components/sidebar/SidebarView.vue'
import { sidebarWidth } from './components/sidebar/state'
import AuthButton from '@/components/authentication/AuthButton.vue'
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');
* {
  font-family: 'Fira Code', monospace;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
  scroll-behavior: smooth;
}
</style>
