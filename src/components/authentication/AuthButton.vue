<template>
  <div class="authbar">
    <span class="" v-if="!isLogin">
      <a href="/login">
        <button class="btn border-2 bg-white dark:border-bg">Login</button>
      </a>
      <a href="/signup">
        <button class="btn ">Sign Up</button>
      </a>
    </span>
    <span v-else>
      <a href="">
        <button @click="handleLogout()" class="btn ">Logout</button>
      </a>
    </span>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/store'
const store = useUserStore()
const isLogin = store.getToken == null ? false : true
const handleLogout = ()=>{
  store.logout()
}
</script>

<style>
:root {
  --button-bg-color: #2f855a;
  --button-item-hover: #38a169;
  --button-item-active: #276749;
}
</style>

<style scoped>
.authbar {
  position: fixed;
  right: 0;
  top: 0;
}

.btn {
  width: 8em;
  height: 2.6em;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  margin: 8px;

  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
}

.btn:before {
  content: '';
  position: absolute;
  z-index: -1;
  background-color: var(--button-bg-color);
  height: 150px;
  width: 200px;
  border-radius: 50%;

  top: 100%;
  left: 100%;
  transition: all 0.7s;
}

.btn:hover {
  color: #fff;
}

.btn:hover:before {
  top: -50px;
  left: -40px;
}

.btn:active:before {
  background: var(--button-item-active);
  transition: background 0s;
}
.btn {
  color: var(--button-bg-color);
  transition: 0.5s linear;
}
</style>
