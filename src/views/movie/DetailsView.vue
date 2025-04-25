<template>
  <div class="bg-black h-screen">
    <div class="text-white h-full flex flex-col justify-center items-center">
      <div class="w-full h-full">
        <iframe :src="embed_link" frameborder="0" class="h-full w-full"></iframe>
      </div>
      <div class="w-full h-full flex justify-center p-15 gap-5">
        <div class="relative">
          <img :src="data.poster" class="w-60 rounded-lg" />
          <div
            @click="toggleList()"
            class="absolute top-0 left-0 text-amber-700 bg-amber-800/30 m-2 p-2 rounded-xl cursor-pointer hover:bg-amber-800 hover:text-white duration-300"
          >
            <p v-if="add">
              <i class="fa-solid fa-bookmark text-4xl"></i>
            </p>
            <p v-else><i class="fa-regular fa-bookmark text-4xl"></i></p>
          </div>
        </div>
        <div class="w-1/2 flex flex-col gap-5">
          <h1 class="text-3xl text-amber-700">{{ data.title }}</h1>
          <p
            class="text-sm first-letter:text-8xl first-letter:float-left first-letter:mr-3 first-letter:font-semibold tracking-widest"
          >
            {{ data.plot }}
          </p>
          <p>runtime: {{ data.runtime }}</p>
          <ul
            class="flex gap-5 *:text-sm *:bg-amber-500/10 *:text-amber-800 *:font-bold *:p-2 *:px-4 *:rounded-full *:border *:border-amber-900"
          >
            <li class="" v-for="genre in genres" :key="genre">
              {{ genre }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store/store'

const store = useUserStore()
const route = useRoute()
const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

const data = ref({})
const embed_link = ref()
const genres = ref({})
const add = ref(false)
const watchListData = ref({
  userId: store.userData.id,
  movieId: route.params.id,
})

const movieDetails = async () => {
  try {
    const result = await instance.get(`/api/movie/${route.params.id}/details`)
    data.value = result.data.movieData
    embed_link.value = result.data.trailerLink
    genres.value = result.data.genres
  } catch (error) {
    console.log(error)
  }
}

const toggleList = async () => {
  add.value = !add.value
  watchListData.value.add = add.value
  try {
    const result = await instance.post('/api/movie/watchlist/toggle', watchListData.value)
    store.setWatchListData = result.data.
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  movieDetails()
})
</script>

