<template>
  <div class="h-screen w-full flex flex-col items-center">
    <div class="bg-green-800 shadow-xl h-1/3 w-full"></div>
    <div
      class="wrapper w-1/2 h-130 shadow-lg bg-white rounded-lg -mt-25 pt-15 flex flex-col items-center"
    >
      <div class="top-wrapper flex justify-center md:gap-50">
        <div class="">
          <a href="/" class="hover:text-green-800 group text-gray-500 duration-300">
            <i class="fa-solid fa-arrow-left group-hover:-translate-x-1 duration-300 text-sm"></i>
            Back
          </a>
        </div>
        <div
          class="w-50 h-50 border-2 ml-10 -mt-25 border-gray-100 rounded-full overflow-hidden shadow-md"
        >
          <img :src="profileURL" class="w-full h-full object-cover" id="output" />
        </div>
        <a href="" class="hover:text-green-800 text-gray-500 duration-300">
          <i class="fa-solid fa-bookmark text-sm"></i> Watch list</a
        >
      </div>
      <transition name="fade" mode="out-in">
        <!-- displays only when the user chooses the view profile option -->
        <div class="mt-5 text-center mb-5" v-if="picked === 'view'">
          <h2 class="text-4xl">
            {{ storedData.name }}
            <span v-if="storedData.nickname" class="text-sm font-semibold text-green-800"
              >({{ storedData.nickname }})</span
            >
          </h2>
          <div class="w-full flex mt-3 text-gray-500 justify-center items-center gap-5">
            <div class="mt-3 w-1/2 text-gray-500 flex flex-col items-start">
              <div class="flex justify-center items-center gap-2">
                <i class="fa-solid fa-location-dot text-sm"></i>
                <h5 class="text-md">Address</h5>
              </div>
              <p class="text-sm" v-if="storedData.city">
                {{ storedData.postal_code }},
                {{ storedData.city }}
              </p>
              <p v-else>-</p>
            </div>

            <div class="mt-3 w-1/2 text-gray-500 flex flex-col items-start">
              <div class="flex justify-center items-center gap-2">
                <i class="fa-solid fa-envelope text-sm"></i>
                <h5 class="text-md">Email</h5>
              </div>
              <p class="text-sm" v-if="storedData.email">
                {{ storedData.email }}
              </p>
              <p v-else>-</p>
            </div>
          </div>
          <div class="w-full flex mt-4 text-gray-500 justify-center items-center gap-5">
            <div class="w-1/2 flex flex-col items-start">
              <div class="flex items-center justify-center gap-2">
                <i class="fa-solid fa-phone text-sm"></i>
                <h5 class="text-md">Ph number</h5>
              </div>
              <p v-if="storedData.phone_number" class="text-start">{{ storedData.phone_number }}</p>
              <p v-else class="inline-flex justify-center">-</p>
            </div>
            <div class="w-1/2 flex flex-col items-start">
              <div class="flex items-center justify-center gap-2">
                <i class="fa-solid fa-cake-candles text-sm"></i>
                <h5 class="text-md">Birthday</h5>
              </div>
              <p v-if="storedData.date_of_birth">{{ storedData.date_of_birth }}</p>
              <p v-else>-</p>
            </div>
          </div>
        </div>
        <div class="" v-else>
          <div class="flex justify-center items-center mt-5 gap-5">
            <div class="flex flex-col mt-3">
              <label class="font-medium">Profile</label>
              <div class="flex">
                <span
                  class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2 border border-e-0 border-green-800 text-sm bg-green-800"
                >
                  <i class="fa-solid fa-camera text-sm"></i>
                </span>
                <input
                  type="file"
                  class="rounded-none outline-none w-55 text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                  @change="loadFile($event)"
                  :value="newData.profile"
                />
              </div>
            </div>

            <div class="flex flex-col mt-3">
              <label class="font-medium">Name</label>
              <div class="flex">
                <span
                  class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2 border border-e-0 border-green-800 text-sm bg-green-800"
                >
                  <i class="fa-solid fa-circle-user text-sm"></i>
                </span>
                <input
                  type="text"
                  class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                  placeholder="name..."
                  v-model="newData.name"
                />
              </div>
            </div>
          </div>
          <div class="flex gap-5 w-full">
            <div class="flex flex-col mt-3">
              <label class="font-medium">Address</label>
              <div class="flex">
                <span
                  class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2.5 border border-e-0 border-green-800 text-sm bg-green-800"
                >
                  <i class="fa-solid fa-location-dot text-sm"></i>
                </span>
                <input
                  type="text"
                  class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                  placeholder="city..."
                  v-model="newData.address"
                />
              </div>
            </div>

            <div class="flex flex-col mt-3">
              <label class="font-medium">Email</label>
              <div class="flex">
                <span
                  class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2 border border-e-0 border-green-800 text-sm bg-green-800"
                >
                  <i class="fa-solid fa-envelope text-sm"></i>
                </span>
                <input
                  type="text"
                  class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                  v-model="newData.email"
                />
              </div>
            </div>
          </div>

          <div class="flex gap-5 w-full">
            <div class="flex flex-col mt-3">
              <label class="font-medium">Ph number</label>
              <div class="flex">
                <span
                  class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2 border border-e-0 border-green-800 text-sm bg-green-800"
                >
                  <i class="fa-solid fa-phone text-sm"></i>
                </span>
                <input
                  type="text"
                  class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                  v-model="newData.phone_number"
                  placeholder="phone number..."
                />
              </div>
            </div>

            <div class="flex flex-col mt-3">
              <label class="font-medium">Date of birth</label>
              <div class="flex">
                <span
                  class="inline-flex items-center rounded-s-md rounded-e-0 text-white px-2.5 border border-e-0 border-green-800 text-sm bg-green-800"
                >
                  <i class="fa-solid fa-calendar-days text-sm"></i>
                </span>
                <input
                  type="text"
                  class="rounded-none outline-none text-sm p-1 border text-gray-700 px-2 rounded-e-md bg-gray-50 border-gray-300 focus:ring-green-800 focus:border-green-800"
                  v-model="newData.date_of_birth"
                  placeholder="birthday..."
                />
              </div>
            </div>
          </div>
        </div>
      </transition>
      <!-- displays when user chooses the edit profile option-->

      <div class="relative w-full mt-5 flex justify-center">
        <transition name="slide-up">
          <button
            v-if="picked === 'view'"
            @click="picked = 'edit'"
            class="absolute bg-green-800 p-2 text-white shadow-sm hover:text-green-800 border-2 hover:border-green-800 hover:bg-gray-200 duration-300 rounded-xl cursor-pointer text-sm"
          >
            Edit Profile
          </button>
          <button
            v-else-if="picked === 'edit'"
            @click="picked = 'view'"
            class="absolute bg-green-800 p-2 text-white shadow-sm hover:text-green-800 border-2 hover:border-green-800 hover:bg-gray-200 duration-300 rounded-xl cursor-pointer text-sm"
          >
            Save Profile
          </button>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/store'
const store = useUserStore()
const storedData = store.userData

const picked = ref('view')
const profileURL = ref(
  storedData.profile ? '/profile/' + storedData.profile : '/profile/default.jpg',
)

const newData = ref({
  profile: storedData.profile,
  name: storedData.name,
  address: storedData.address,
  email: storedData.email,
  phone_number: storedData.phone_number,
  date_of_birth: storedData.date_of_birth,
})

function loadFile(event) {
  var reader = new FileReader()
  reader.onload = function () {
    var output = document.getElementById('output')
    output.src = reader.result
  }
  reader.readAsDataURL(event.target.files[0])
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>
