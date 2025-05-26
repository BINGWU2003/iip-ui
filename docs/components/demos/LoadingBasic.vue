<template>
  <div class="demo-loading">
    <div class="loading-container" v-loading="loading" element-loading-text="加载中...">
      <p>这里是需要加载的内容区域</p>
      <p>当加载状态为 true 时会显示加载动画</p>
    </div>
    <div class="operation">
      <iip-button type="primary" @click="toggleLoading">
        {{ loading ? '关闭加载' : '显示加载' }}
      </iip-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const loading = ref(false)

const toggleLoading = () => {
  loading.value = !loading.value
}

// 确保容器有正确的定位
onMounted(() => {
  const container = document.querySelector('.loading-container')
  if (container && window.getComputedStyle(container).position === 'static') {
    container.style.position = 'relative'
  }
})
</script>

<style scoped>
.demo-loading {
  width: 100%;
}

.loading-container {
  padding: 30px;
  text-align: center;
  background-color: var(--vp-c-bg-soft);
  border-radius: 6px;
  margin-bottom: 20px;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  /* 确保能够正确定位遮罩层 */
}

.operation {
  text-align: center;
}
</style>