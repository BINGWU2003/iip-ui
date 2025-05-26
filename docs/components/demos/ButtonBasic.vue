<template>
  <div class="demo-button">
    <iip-button>默认按钮</iip-button>
    <iip-button type="primary">主要按钮</iip-button>
    <iip-button type="success">成功按钮</iip-button>
    <iip-button type="warning">警告按钮</iip-button>
    <iip-button type="danger">危险按钮</iip-button>
    <iip-button type="info">信息按钮</iip-button>
  </div>
</template>

<script setup>
// 使用VitePress的useData获取当前主题
import { useData } from 'vitepress'
const { isDark } = useData()
</script>

<style scoped>
.demo-button .iip-button {
  margin-right: 10px;
  margin-bottom: 10px;
}

/* 确保按钮在暗黑模式下有正确的样式 */
:deep(.iip-button) {
  transition: all 0.3s;
}
</style>