import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    // State
    const userData = ref({})
    const token = ref(null)
    const movieData = ref({})
    const watchList = ref({})

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
    const setMovieData = (data) => {
      movieData.value = data
    }
    const setWatchListData = (data) => {
      watchList.value = data
    }

    const logout = () => {
      setToken(null)
    }

    return {
      userData,
      token,
      movieData,
      setUserData,
      setToken,
      setMovieData,
      getUserData,
      getToken,
      setWatchListData,
      logout,
    }
  },
  {
    persist: true,
  },
)
