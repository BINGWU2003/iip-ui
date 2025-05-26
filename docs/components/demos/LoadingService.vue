<template>
  <div class="demo-loading">
    <div class="loading-container" ref="loadingTarget">
      <p>这里是需要加载的内容区域</p>
      <p>点击按钮将以服务方式调用 Loading</p>
    </div>
    <div class="operation">
      <iip-button type="primary" @click="showFullscreenLoading">全屏加载</iip-button>
      <iip-button type="success" @click="showTargetLoading">区域加载</iip-button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import IipLoading from '../../../packages/components/loading'

const loadingTarget = ref(null)

// 全屏加载
const showFullscreenLoading = () => {
  const loading = IipLoading.service({
    fullscreen: true,
    text: '加载中...'
  })

  setTimeout(() => {
    loading.close()
  }, 2000)
}

// 指定区域加载
const showTargetLoading = () => {
  if (!loadingTarget.value) {
    console.error('加载目标元素不存在')
    return
  }

  // 确保 target 是 DOM 元素本身而不是 Vue ref
  const targetElement = loadingTarget.value
  console.log('加载目标元素:', targetElement)

  // 确保目标元素有足够的尺寸和定位样式
  if (window.getComputedStyle(targetElement).position === 'static') {
    targetElement.style.position = 'relative'
  }

  const loading = IipLoading.service({
    target: targetElement,
    fullscreen: false, // 确保不是全屏
    text: '正在加载数据...',
    background: 'rgba(0, 0, 0, 0.7)'
  })

  setTimeout(() => {
    loading.close()
  }, 2000)
}

// 调试用，确认元素引用正确
onMounted(() => {
  console.log('Loading target mounted:', loadingTarget.value)
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

.operation .iip-button {
  margin: 0 10px;
}
</style>