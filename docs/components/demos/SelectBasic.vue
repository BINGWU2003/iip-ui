<template>
  <div class="demo-select">
    <iip-select v-model="value" placeholder="请选择" :options-source="options">
    </iip-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const options = [
  { value: 'option1', label: '选项1' },
  { value: 'option2', label: '选项2' },
  { value: 'option3', label: '选项3' },
  { value: 'option4', label: '选项4' },
  { value: 'option5', label: '选项5' }
]
</script>

<style scoped>
.demo-select {
  width: 300px;
}
</style>