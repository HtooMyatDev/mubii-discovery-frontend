<template>
  <div class="flex">
    <SidebarView />
    <article class="bg-amber-800 text-white w-full">
      <h1>About</h1>
      <p>This is the about page of our application.</p>
      <p>Here you can find information about our team, mission, and values.</p>
      <p>
        We are dedicated to providing the best service possible and are always looking for ways to
        improve.
      </p>
      <p>If you have any questions or feedback, please don't hesitate to reach out.</p>
      <p>Thank you for visiting our about page!</p>
    </article>
  </div>
</template>

<script setup>
import SidebarView from '@/components/navbar/SidebarView.vue'
</script>
