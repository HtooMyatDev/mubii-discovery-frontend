<template>
  <div
    style="padding: 12px; margin: 15px 0; font-weight: bold; font-size:12px;"
    role="alert"
    :class="`alert ${props.color} border-none text-white`"
  >
    <i class="fa-solid text-xl" :class="`fa-${props.icon}`"></i>
    <span>{{ props.message }}</span>
  </div>
</template>

<script setup>
const props = defineProps(['type', 'message','color', 'icon'])
</script>

<style></style>
