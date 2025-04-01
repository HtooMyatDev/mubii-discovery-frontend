<template>
  <div :style="{ 'margin-left': sidebarWidth }">
    <Sidebar />
    <h1>About</h1>
    <p>This is the about page of our application.</p>
    <p>Here you can find information about our team, mission, and values.</p>
    <p>
      We are dedicated to providing the best service possible and are always looking for ways to
      improve.
    </p>
    <p>If you have any questions or feedback, please don't hesitate to reach out.</p>
    <p>Thank you for visiting our about page!</p>
    <AuthButton style="margin: 1em 1.5em" />
  </div>
</template>

<script setup>
import Sidebar from '@/components/sidebar/SidebarView.vue'
import AuthButton from '@/components/authentication/AuthButton.vue'
import { sidebarWidth } from '@/components/sidebar/state'
</script>
