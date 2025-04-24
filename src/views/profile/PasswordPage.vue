<template>
  <div class="w-full flex justify-center items-center h-screen">
    <div class="flex flex-col shadow-lg w-150 items-center rounded-b-xl">
      <div class="bg-green-800 w-full rounded-t-xl">
        <h1 class="text-white text-2xl p-5 font-bold">Change account password</h1>
      </div>
      <div class="w-full p-10 flex flex-col justify-center">
        <AppAlert
          v-if="providerStatus"
          message="As you have recently signed in with social login, you do not need to fill the old password!"
          color="bg-yellow-500"
          icon="circle-info"
        />
        <PasswordInput
          label="Old password"
          placeholder="old password..."
          :disabled="providerStatus"
          @updateValue="handleValueChange('oldPassword', $event)"
          :status="status"
          :message="errorMessages.oldPassword"
        />
        <PasswordInput
          label="New password"
          placeholder="new password..."
          @updateValue="handleValueChange('newPassword', $event)"
          :status="status"
          :message="errorMessages.newPassword"
        />
        <PasswordInput
          label="Confirm password"
          placeholder="confirm password..."
          @updateValue="handleValueChange('confirmPassword', $event)"
          :status="status"
          :message="errorMessages.confirmPassword"
        />
        <div class="flex gap-3">
          <a
            href="/"
            class="w-1/3 flex justify-center items-center gap-2 mt-6 duration-300 text-gray-500 p-2 cursor-pointer hover:text-green-800"
          >
            Back</a
          >
          <button
            class="w-2/3 bg-green-800 mt-6 duration-300 text-white hover:bg-green-900 p-2 rounded-lg cursor-pointer"
            @click="changePasswordProcess()"
          >
            Change password
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PasswordInput from '../../components/authentication/PasswordInput.vue'
import AppAlert from '../../components/AppAlert.vue'
import { computed, ref } from 'vue'
import { useUserStore } from '@/store/store'
import axios from 'axios'

const status = ref(true)
const errorMessages = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
})
const store = useUserStore()
const providerStatus = computed(() => {
  return store.userData.password == null
})

const data = ref({
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
  userId: store.userData.id,
})

const handleValueChange = (childId, newValue) => {
  if (childId === 'oldPassword') {
    data.value.oldPassword = newValue
  } else if (childId === 'newPassword') {
    data.value.newPassword = newValue
  } else if (childId === 'confirmPassword') {
    data.value.confirmPassword = newValue
  }
}

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${store.token}`,
  },
})

const changePasswordProcess = async () => {
  try {
    const result = await instance.post('/api/profile/change/password', data.value)
    window.location.href = '/password-change-success'
  } catch (error) {
    errorMessages.value.oldPassword = error.response.data.error.oldPassword
      ? error.response.data.error.oldPassword[0]
      : ''
    errorMessages.value.newPassword = error.response.data.error.newPassword
      ? error.response.data.error.newPassword[0]
      : ''
    errorMessages.value.confirmPassword = error.response.data.error.confirmPassword
      ? error.response.data.error.confirmPassword[0]
      : ''
    status.value = error.response.data.status
  }
}
</script>
