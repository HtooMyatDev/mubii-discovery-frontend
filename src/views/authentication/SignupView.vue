<template>
  <div class="wrapper">
    <SignupForm />
  </div>
</template>

<script setup>
import SignupForm from '@/components/authentication/SignupForm.vue'
</script>

<style scoped>
.wrapper {
  background-color: var(--sidebar-bg-color);
  height: 100vh;
}
</style>
