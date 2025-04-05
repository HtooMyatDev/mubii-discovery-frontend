<template>
  <div class="signup-form">
    <form @submit.prevent="">
      <div class="header-wrapper">
        <h2 class="header">Welcome to Mubii Discovery!</h2>
        <h3 class="header">Register Form</h3>
      </div>
      <div class="form-group">
        <label for="">Name</label>

        <div class="input-group">
          <i class="fa-solid fa-user"></i>
          <input type="text" name="name" placeholder="Enter your name..." v-model="userData.name" />
        </div>
        <small v-if="validation.name" class="text-error">The name field is required</small>
      </div>

      <div class="form-group">
        <label for="">Email</label>

        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>
          <input
            type="email"
            name="email"
            placeholder="Enter your email..."
            v-model="userData.email"
          />
        </div>
        <small v-if="validation.email" class="text-error">The email field is required</small>
      </div>

      <div class="form-group">
        <label for="">Password</label>

        <div class="input-group">
          <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            name="password"
            placeholder="Enter your password..."
            v-model="userData.password"
          />
        </div>
        <small v-if="validation.password" class="text-error">The password field is required</small>
      </div>

      <div class="form-group">
        <label for="">Confirm Password</label>

        <div class="input-group">
          <i class="fa-solid fa-lock"></i>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Enter your password again..."
            v-model="userData.confirmPassword"
          />
        </div>
        <small v-if="validation.confirmPassword" class="text-error"
          >The password confirmation field is required.</small
        >
        <br />
      </div>

      <div class="form-group">
        <button type="submit" class="btn" @click="register()">Register</button>
      </div>

      <div class="login-group">
        <span style="margin-right: 5px; color: black">Already have an account?</span>
        <div>
          <a href="/login">
            <p>Login</p>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref, computed, reactive } from 'vue'
import { useRouter } from 'vue-router'
import AppAlert from '../AppAlert.vue'
import { useUserStore } from '../../store/store'

const store = useUserStore()
const router = useRouter()
const userData = ref({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
})

const validation = ref({
  name: false,
  email: false,
  password: false,
  confirmPassword: false,
  samePassword: false,
})

const emptyFields = () => {
  userData.value.password = ''
  userData.value.confirmPassword = ''
}

function checkFormValidation() {
  validation.value.name = userData.value.name === '' ? true : false
  validation.value.email = userData.value.email === '' ? true : false
  validation.value.password = userData.value.password === '' ? true : false
  validation.value.confirmPassword = userData.value.confirmPassword === '' ? true : false
  validation.value.samePassword =
    userData.value.password === userData.value.confirmPassword ? true : false
}

const register = () => {
  checkFormValidation()
  if (
    !validation.value.name &&
    !validation.value.email &&
    !validation.value.password &&
    !validation.value.confirmPassword
  ) {
    axios
      .post('http://localhost:8000/api/auth/register', userData.value)
      .then((response) => {
        store.setToken(response.data.token)
        store.setUserData(response.data.user)

        router.push({ name: 'home' })
      })
      .catch((error) => {
        console.error(error)
        alert('Registration failed!')
      })
  } else {
    emptyFields()
  }
}
</script>

<style scoped>
.header {
  margin-bottom: 0.5em;
  text-align: center;
}

.signup-form {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.signup-form form {
  display: flex;
  flex-direction: column;

  padding: 1.2em 2em;
  max-width: 500px;
  width: 100%;
  border-radius: 15px;

  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;

  color: var(--sidebar-bg-color);
  background-color: white;
}
.form-group {
  margin-bottom: 2em;
}

.form-group label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: 800;
}
.form-group input {
  width: 100%;
  padding: 12px 10px;
  border: none;
  outline: none;
}

.form-group input::placeholder {
  opacity: 0.5;
  font-weight: 600;
}

.input-group:focus-within {
  border-bottom: 2px solid var(--sidebar-bg-color);
  transition: 0.5s ease;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
}

.input-group {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 12px;
  border: 2px solid white;
  transition: 0.5s ease;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.login-group {
  display: flex;
  justify-content: center;
}

.login-group p {
  color: var(--sidebar-bg-color);
  font-weight: 600;

  margin-inline: auto;
  overflow: hidden;
  white-space: nowrap;
  border-right: 12px solid var(--sidebar-bg-color);

  animation: typing 2s steps(7) forwards;
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
}
.btn {
  background-color: white;
  color: var(--sidebar-bg-color);

  border: 2px solid var(--sidebar-bg-color);
  border-radius: 12px;

  cursor: pointer;

  padding: 12px 10px;
  width: 100%;
  font-size: 15px;
  transition: 0.2s ease-in-out;
}

.btn:hover,
.btn:focus {
  background-color: var(--sidebar-bg-color);
  color: white;
}
</style>
