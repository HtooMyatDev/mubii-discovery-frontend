import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useUserStore = defineStore('user', () => {
  // State
  const userData = ref({})
  const token = ref(null)


  // Getters
  const getUserData = computed(() => {
    return userData.value
  })
  const getToken = computed(() => {
    return token.value
  })
  // Actions
  const setUserData = (data) => {
    userData.value = data
  }
  const setToken = (data) => {
    token.value = data
  }

  const logout = () => {
    setToken(null)
    setUserData({})
  }
  return { userData, token, setUserData, setToken, getUserData, getToken, logout }
}, {
  persist: true
})
