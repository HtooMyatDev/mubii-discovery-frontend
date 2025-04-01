<template>
  <div class="wrapper">
    <LoginForm />
  </div>
</template>

<script setup>
import LoginForm from '@/components/authentication/LoginForm.vue'
</script>

<style scoped>
.wrapper {
  background-color: var(--sidebar-bg-color);
  height: 100vh;
}
</style>
