<template>
  <div :style="{ 'margin-left': sidebarWidth }">
    <Sidebar />
    <h1>Home</h1>
    <p>Welcome to the home page!</p>
    <p>Here you can find various resources and links to help you get started.</p>
    <p>Feel free to explore the site and reach out if you have any questions.</p>
    <p>We hope you enjoy your experience!</p>
    <AuthButton style="margin: 1em 1.5em" />
  </div>
</template>

<script setup>
import Sidebar from '@/components/sidebar/SidebarView.vue'
import AuthButton from '@/components/authentication/AuthButton.vue'
import { sidebarWidth } from '@/components/sidebar/state'
</script>
