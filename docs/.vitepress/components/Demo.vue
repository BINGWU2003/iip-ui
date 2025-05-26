<template>
  <div class="demo-block" :class="{ 'is-dark': isDark }">
    <div class="demo-block-component">
      <slot></slot>
    </div>

    <div class="demo-block-code">
      <div class="demo-block-control" @click="toggleCodeVisible">
        <span>{{ codeVisible ? '隐藏代码' : '显示代码' }}</span>
        <i class="icon" :class="{ 'icon-arrow-down': !codeVisible, 'icon-arrow-up': codeVisible }"></i>
      </div>
      <transition name="slide">
        <div class="demo-block-source" v-show="codeVisible">
          <slot name="source"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()
const codeVisible = ref(false)

const toggleCodeVisible = () => {
  codeVisible.value = !codeVisible.value
}
</script>

<style>
/* 亮色模式 */
.vp-doc div[class*='language-'] {
  position: relative;
  margin: 0;
  background-color: var(--vp-code-block-bg);
  overflow-x: auto;
  transition: background-color 0.5s;
}

/* 暗色模式覆盖 */
.dark .vp-doc div[class*='language-'] {
  background-color: var(--vp-code-block-bg);
}

.dark .vp-doc pre,
.dark .vp-doc code {
  color: var(--vp-c-text-1);
  background-color: var(--vp-code-block-bg);
}
</style>

<style scoped>
.demo-block {
  border: 1px solid #e7eaed;
  border-radius: 6px;
  margin-bottom: 24px;
  transition: all 0.2s;
  overflow: hidden;
}

.demo-block:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.demo-block-component {
  padding: 24px;
  background-color: var(--vp-c-bg);
  border-bottom: 1px solid var(--vp-c-divider);
}

.demo-block-code {
  background-color: var(--vp-c-bg-soft);
}

.demo-block-control {
  padding: 10px 16px;
  color: var(--vp-c-text-2);
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  transition: all 0.3s;
}

.demo-block-control:hover {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg-soft);
}

.icon {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-left: 8px;
  position: relative;
}

.icon-arrow-down::after,
.icon-arrow-up::after {
  content: "";
  position: absolute;
  left: 4px;
  top: 6px;
  width: 8px;
  height: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(45deg);
  transition: transform 0.3s;
}

.icon-arrow-up::after {
  transform: rotate(-135deg);
}

.demo-block-source {
  padding: 16px;
  background-color: var(--vp-code-block-bg);
  max-height: 500px;
  overflow: auto;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter-from,
.slide-leave-to {
  max-height: 0;
  opacity: 0;
}

/* 暗黑模式 */
.is-dark {
  border-color: var(--vp-c-divider);
}

.is-dark:hover {
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}

.is-dark .demo-block-component {
  border-bottom-color: var(--vp-c-divider);
}
</style>