<template>
  <div class="signup-form">
    <form @submit.prevent="">
      <div class="header-wrapper">
        <h2 class="header">Welcome back to Mubii Discovery!</h2>
        <h3 class="header">Login Form</h3>
      </div>

      <AppAlert type="error" message="The credentials do not match" v-if="!status" />

      <div class="form-group">
        <label for="">Email</label>
        <div class="input-group">
          <i class="fa-solid fa-envelope"></i>
          <input
            type="email"
            v-model="userData.email"
            name="email"
            placeholder="Enter your email..."
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
            v-model="userData.password"
            name="password"
            placeholder="Enter your password..."
          />
        </div>
        <small v-if="validation.password" class="text-error">The password field is required</small>
      </div>

      <div class="form-group button-group">
        <button type="submit" @click="loginProcess()" class="btn">Login</button>
        <span style="margin-bottom: 1.2em; color: gray"> or </span>
        <div class="btn-wrapper">
          <button type="button" @click.prevent="socialLogin('google')" class="google social-btn">
            <i class="fa-brands fa-google"></i>
          </button>
          <button type="button" @click.prevent="socialLogin('github')" class="github social-btn">
            <i class="fa-brands fa-github"></i>
          </button>
        </div>
      </div>

      <div class="login-group">
        <span style="margin-right: 5px; color: black">Don't have an account yet?</span>
        <div>
          <a href="/signup">
            <p>Register</p>
          </a>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import axios from 'axios'
import { ref } from 'vue'
import AppAlert from '../AppAlert.vue'
import { useUserStore } from '../../store/store'
import { useRouter } from 'vue-router'

const store = useUserStore()

const router = useRouter()

const userData = ref({
  email: '',
  password: '',
})

const status = ref(true)

const validation = ref({
  email: false,
  password: false,
})

const loginProcess = () => {
  validation.value.email = userData.value.email === '' ? true : false
  validation.value.password = userData.value.password === '' ? true : false

  if (!validation.value.email && !validation.value.password) {
    axios
      .post('http://localhost:8000/api/auth/login', userData.value)
      .then((response) => {
        store.setUserData(response.data.user)
        store.setToken(response.data.token)
        router.push({ name: 'home' })
      })
      .catch((error) => {
        console.log(error)
        status.value = false
        userData.value.password = ''
      })
  }
}

const socialLogin = async (provider) => {
  window.location.href = `http://localhost:8000/auth/${provider}/redirect`
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
  transition: 0.5s ease;
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
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  border-radius: 12px;
  border: 2px solid white;
  transition: 0.5s ease;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}
.btn-wrapper {
  display: flex;
  justify-content: center;
  gap: 0.5em;
}

.btn-wrapper .social-btn {
  background-color: white;
  color: var(--sidebar-bg-color);

  border: 2px solid var(--sidebar-bg-color);
  border-radius: 15px;

  cursor: pointer;

  padding: 15px 45px;
  width: 100%;
  font-size: 1.1em;
  transition: 0.2s ease-in-out;
}
.btn-wrapper .social-btn:hover {
  background-color: var(--sidebar-bg-color);
  color: white;
}

.login-group {
  display: flex;
  justify-content: center;
}

.button-group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.login-group p {
  color: var(--sidebar-bg-color);
  font-weight: 600;

  margin-inline: auto;
  overflow: hidden;
  white-space: nowrap;
  border-right: 12px solid var(--sidebar-bg-color);

  animation: typing 2s steps(9) forwards;
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
  margin-bottom: 1.2em;
  width: 100%;
  font-size: 15px;
  transition: 0.2s ease-in-out;
}

.btn:hover {
  background-color: var(--sidebar-bg-color);
  color: white;
}
</style>
