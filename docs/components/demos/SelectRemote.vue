<template>
  <div class="demo-select">
    <iip-select v-model="value" placeholder="请输入关键词搜索" :remote="true" :loading="loading" :fetch-options="fetchOptions"
      filterable>
    </iip-select>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
const loading = ref(false)

// 模拟远程搜索
const fetchOptions = (params) => {
  loading.value = true

  // 模拟异步请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = [
        { value: '1', label: params.keyword + ' - 结果1' },
        { value: '2', label: params.keyword + ' - 结果2' },
        { value: '3', label: params.keyword + ' - 结果3' }
      ]
      loading.value = false
      resolve(result)
    }, 1000)
  })
}
</script>

<style scoped>
.demo-select {
  width: 300px;
}
</style>