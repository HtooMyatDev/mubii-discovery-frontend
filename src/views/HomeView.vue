<template>
  <div class="flex">
    <SidebarView />
    <article class="bg-black w-full text-white">
      <div class="carousel carousel-center rounded-box space-x-4 p-4 w-full">
        <div
          class="carousel-item cursor-pointer"
          v-for="movie in movies"
          :key="movie.id"
          @click="movieDetails(movie.id)"
        >
          <img :src="movie.poster" class="w-50" />
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import SidebarView from '@/components/navbar/SidebarView.vue'
import axios from 'axios'
import { onMounted, ref } from 'vue'
import { useMovieStore } from '@/store/store.js'
import { useRouter } from 'vue-router'

const movieStore = useMovieStore()
const movies = ref({})
const router = useRouter()

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

const requestMovieData = async () => {
  try {
    const result = await instance.get('/api/movie/list')
    movieStore.setMovieData = result.data.movieData
    movies.value = result.data.movieData
  } catch (error) {
    console.log(error)
  }
}

const movieDetails = (id) => {
  router.push({ name: 'movieDetails', params: { id: id } })
}

onMounted(() => {
  requestMovieData()
})
</script>
