<template>
  <div class="demo-container" :class="{ 'is-dark': isDark }">
    <div class="demo-content">
      <slot></slot>
    </div>
    <div class="demo-code-container" v-if="sourceCode">
      <div class="demo-code-actions">
        <button class="code-button" @click="toggleCode">
          {{ codeVisible ? '隐藏代码' : '显示代码' }}
        </button>
      </div>
      <div class="demo-code" v-show="codeVisible">
        <pre><code :class="{ 'language-vue': true, 'dark-code': isDark }" v-html="highlightedCode"></code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useData } from 'vitepress'
import hljs from 'highlight.js/lib/core'
import vue from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github.css'
import 'highlight.js/styles/github-dark.css'

hljs.registerLanguage('vue', vue)

const { isDark } = useData()

const props = defineProps({
  sourceCode: {
    type: String,
    default: ''
  }
})

const codeVisible = ref(false)
const highlightedCode = computed(() => {
  if (!props.sourceCode) return ''
  return hljs.highlight(props.sourceCode, { language: 'vue' }).value
})

const toggleCode = () => {
  codeVisible.value = !codeVisible.value
}
</script>

<style>
/* 暗色模式下的代码高亮 */
.dark-code {
  background-color: #282c34 !important;
  color: #abb2bf !important;
}

.dark-code .hljs-tag {
  color: #e06c75 !important;
}

.dark-code .hljs-name {
  color: #e06c75 !important;
}

.dark-code .hljs-attr {
  color: #d19a66 !important;
}

.dark-code .hljs-string {
  color: #98c379 !important;
}

.dark-code .hljs-keyword {
  color: #c678dd !important;
}
</style>

<style scoped>
.demo-container {
  margin: 20px 0;
  border: 1px solid #ebedf0;
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.demo-container:hover {
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
}

.demo-content {
  padding: 24px;
  background-color: var(--vp-c-bg);
}

.demo-code-container {
  border-top: 1px solid #ebedf0;
  background-color: var(--vp-c-bg-soft);
}

.demo-code-actions {
  padding: 8px 16px;
  text-align: right;
}

.code-button {
  padding: 4px 8px;
  font-size: 12px;
  color: var(--vp-c-text-2);
  background-color: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.code-button:hover {
  color: var(--vp-c-brand);
  border-color: var(--vp-c-brand);
}

.demo-code {
  padding: 16px;
  border-top: 1px solid var(--vp-c-divider);
  max-height: 500px;
  overflow: auto;
  background-color: var(--vp-code-block-bg);
}

/* 暗黑模式 */
.is-dark {
  border-color: var(--vp-c-divider);
}

.is-dark:hover {
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.1);
}

.is-dark .demo-code-container {
  border-top-color: var(--vp-c-divider);
}

.is-dark .demo-code {
  border-top-color: var(--vp-c-divider);
}
</style>