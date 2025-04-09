<template>
  <router-link :to="to" class="link" :class="{ active: isActive }">
    <i class="icon" :class="icon"></i>
    <transition name="fade">
      <span v-if="!collapsed">
        <slot></slot>
      </span>
    </transition>
  </router-link>
</template>

<script setup>
import { collapsed } from './state'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps(['to', 'icon', 'class'])
const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<style scoped>
.fade-enter-active,
.fade-levae-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 500;
  user-select: none;

  margin: 0.2em 0;
  padding: 1.2em;
  border-radius: 0.25em;
  height: 1.5em;

  color: white;
  text-decoration: none;
}

.link:hover {
  background-color: var(--sidebar-item-hover);
}

.link.active {
  background-color: var(--sidebar-item-active);
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
  margin-right: 10px;
}
</style>
