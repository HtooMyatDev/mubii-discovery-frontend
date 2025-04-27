/<template>
  <div class="bg-black h-screen">
    <div
      class="text-white h-full w-full text-5xl flex justify-center items-center font-bold gap-5"
      v-if="loading"
    >
      <i class="fa-solid fa-rotate-right fa-spin"></i>
      Loading Data ...
    </div>
    <div v-else class="text-white h-full flex flex-col justify-center items-center">
      <div class="w-full h-full">
        <iframe :src="embed_link" frameborder="0" class="h-full w-full"></iframe>
      </div>
      <div class="w-full h-full flex justify-center p-15 gap-5">
        <div class="relative">
          <img :src="data.poster" class="w-60 rounded-lg" />
          <button class="w-full">
            <a
              href="/"
              class="bg-amber-800 text-white hover:font-semibold cursor-pointer text-sm hover:bg-amber-900 duration-200 py-2 px-3 rounded-lg mt-5"
            >
              Return to menu
            </a>
          </button>
          <div
            @click="toggleList()"
            class="absolute top-0 left-0 text-amber-700 bg-amber-800/30 m-2 p-2 rounded-xl cursor-pointer hover:bg-amber-800 hover:text-white duration-300"
          >
            <p v-if="add">
              <i class="fa-solid fa-bookmark text-4xl"></i>
            </p>
            <p v-else>
              <i class="fa-regular fa-bookmark text-4xl"></i>
            </p>
          </div>
        </div>
        <div class="w-1/2 flex flex-col gap-5">
          <h1 class="text-3xl text-amber-700">{{ data.title }}</h1>
          <p
            class="text-sm first-letter:text-8xl first-letter:float-left first-letter:mr-3 first-letter:font-semibold tracking-widest"
          >
            {{ data.plot }}
          </p>
          <p class="flex gap-5">
            <span
              >runtime: <span class="text-amber-700 font-bold">{{ data.runtime }}</span></span
            >
            &
            <span
              >released on
              <span class="text-amber-700 font-bold">{{ data.released_date }}</span></span
            >
          </p>

          <div class="flex gap-10 items-center">
            <p class="flex gap-2 *:text-amber-800">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </p>

            <!-- Open the modal using ID.showModal() method -->
            <button
              class="outline-none bg-amber-800 p-2 text-sm rounded-lg cursor-pointer"
              onclick="my_modal_1.showModal()"
            >
              Rate this
            </button>
            <RatingModal id="my_modal_1" />
          </div>

          <ul
            class="flex gap-5 *:text-sm *:bg-amber-500/10 *:text-amber-800 *:font-bold *:p-2 *:px-4 *:rounded-full *:border *:border-amber-900"
          >
            <li
              class="hover:border-amber-700 hover:text-amber-700 cursor-pointer duration-150"
              v-for="genre in genres"
              :key="genre"
            >
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
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useUserStore, useMovieStore } from '@/store/store'
import RatingModal from '../../components/RatingModal.vue'

const userStore = useUserStore()
const movieStore = useMovieStore()

const route = useRoute()
const router = useRouter()

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
})

const data = ref({})
const embed_link = ref()
const genres = ref({})
const add = ref()
const loading = ref(true)

const watchListData = ref({
  userId: userStore.userData.id,
  movieId: route.params.id,
})

const movieDetails = async () => {
  try {
    const result = await instance.get(`/api/movie/${route.params.id}/details`)
    data.value = result.data.movieData
    embed_link.value = result.data.trailerLink
    genres.value = result.data.genres

    if (userStore.userData.token) {
      isAdded()
    }
  } catch (error) {
    console.log(error)
  } finally {
    loading.value = false
  }
}

const isAdded = async () => {
  try {
    const result = instance.get(`/api/movie/watchList/${userStore.userData.id}`)
    add.value = result.data.isAdded === null ? false : true
  } catch (error) {
    console.log(error)
  }
}

const toggleList = async () => {
  if (userStore.userData.id) {
    add.value = !add.value
    watchListData.value.add = add.value
    try {
      const result = await instance.post('/api/movie/watchlist/toggle', watchListData.value)
      movieStore.setWatchListData(result.data.list)
    } catch (error) {
      console.log(error)
    }
  } else {
    router.push('/register')
  }
}

onMounted(() => {
  movieDetails()
})
</script>

