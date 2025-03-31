<template>
  <div class="authbar">
    <span v-if="!isLogin" class="">
      <button class="login btn">Login</button>
      <button class="signup btn">Sign Up</button>
    </span>
    <span v-else> LOGGED IN! </span>
  </div>
</template>

<script setup>
import { isLogin } from './state'
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
  border: 2px solid var(--button-bg-color);
  background: white;
  z-index: 1;
  margin: 8px;
  transition: 0.5s linear;
  font-size: 17px;
  border-radius: 6px;
  font-weight: 500;
  color: var(--button-bg-color);
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
</style>
