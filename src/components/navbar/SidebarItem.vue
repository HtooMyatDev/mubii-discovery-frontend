<template>
  <a
    href="" class="flex gap-2 items-center text-gray-100 hover:text-white cursor-pointer duration-300 group/bar"
  >
    <i :class="`fas fa-${props.icon} text-sm`"></i>
    <span class="opacity-0 group-hover/bar:opacity-100 duration-300 font-bold text-sm">|</span>
    <span class="text-sm group-hover/bar:font-bold opacity-0 group-hover/item:opacity-100">{{ props.text }}</span>
  </a>
</template>

<script setup>
const props = defineProps(['icon', 'text'])
</script>

<style>
</style>
