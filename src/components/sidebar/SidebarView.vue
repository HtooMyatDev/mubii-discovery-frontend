<template>
  <nav class="navbar" :style="{ width: sidebarWidth }">
    <h2>
      <span v-if="!collapsed"
        >Mubii <br />
        Discovery</span
      >
      <span v-else>MD</span>
    </h2>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/about" icon="fas fa-film">Movie</SidebarLink>
    <SidebarLink to="/watch-list" icon="fas fa-list">Watch List</SidebarLink>

    <div class="collapse-icon" @click="toggleSidebar" :class="{ 'rotate-180': collapsed }">
      <i class="fas fa-angle-double-left"></i>
    </div>
  </nav>
</template>

<script setup>
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import SidebarLink from './SidebarLink.vue'
</script>

<style>
:root {
  --sidebar-bg-color: #2f855a;
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
h2 {
  text-align: center;
  margin-bottom: 1em;
}

.navbar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  padding: 0.5em;

  transition: 0.4s ease;

  display: flex;
  flex-direction: column;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  right: 0;
  margin-right: 1.5em;
  padding: 0.75em;

  color: rbga(255, 255, 2550.7);
  transition: 0.4s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
