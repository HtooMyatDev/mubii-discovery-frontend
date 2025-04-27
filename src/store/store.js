import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useUserStore = defineStore(
  'user',
  () => {
    // State
    const userData = ref({})
    const token = ref(null)

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

    return {
      userData,
      token,

      setUserData,
      setToken,

      logout,
    }
  },
  {
    persist: true,
  },
)

export const useMovieStore = defineStore(
  'movie',
  () => {
    const watchList = ref({})
    const movieData = ref({})

    const setWatchListData = (data) => {
      watchList.value = data
    }
    const setMovieData = (data) => {
      movieData.value = data
    }

    return {
      watchList,
      setWatchListData,

      movieData,
      setMovieData,
    }
  },
  {
    persist: true,
  },
)
