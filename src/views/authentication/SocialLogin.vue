<template>
  <div v-if="token">Social login successful! You are now authenticated.</div>
  <div v-else-if="error">Social login failed: {{ error }}</div>
  <div v-else>Processing social login...</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '@/store/store.js'

const route = useRoute()
const store = useUserStore()
const router = useRouter()

const token = route.query.token
const error = route.query.error

if (token) {
  console.log('Token received from backend', token)
  store.setToken(token)
  router.push({ name: 'home' })
} else {
  console.error('Social login error', error)
}
</script>

<style></style>
