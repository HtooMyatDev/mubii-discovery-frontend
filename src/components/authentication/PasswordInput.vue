<template>
  <div class="flex flex-col mt-5 relative">
    <label class="font-bold text-lg" :class="disabled ? 'text-gray-300' : 'text-green-800'">{{
      props.label
    }}</label>
    <input
      type="password"
      @input="handleInput"
      :placeholder="props.placeholder"
      class="border-2 border-gray-200 focus:border-green-800 focus:ring-0 outline-none duration-300 rounded-lg p-2 disabled:border-gray-200 disabled:text-gray-500 disabled:bg-gray-200"
      :disabled="disabled"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['label', 'placeholder', 'disabled'])
const emit = defineEmits(['updateValue'])
const inputValue = ref('')
const handleInput = (event) => {
  inputValue.value = event.target.value
  emit('updateValue', inputValue.value)
}
</script>

<style>
</style>
