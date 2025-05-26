# Loading 加载

用于页面和区块的加载中状态，在 Element Plus 的基础上进行了扩展。

## 基础用法

在需要加载数据时显示动效，包含了指令用法。

<demo>
  <LoadingBasic />
  
  <template #source>

```vue
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
  position: relative; /* 确保能够正确定位遮罩层 */
}

.operation {
  text-align: center;
}
</style>
```

  </template>
</demo>

## 服务方式

通过调用服务的方式使用 Loading 组件。

<demo>
  <LoadingService />
  
  <template #source>

```vue
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
import { ref } from 'vue'
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
  const loading = IipLoading.service({
    target: loadingTarget.value,
    text: '正在加载数据...',
    background: 'rgba(0, 0, 0, 0.7)'
  })
  
  setTimeout(() => {
    loading.close()
  }, 2000)
}
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
}

.operation {
  text-align: center;
}

.operation .iip-button {
  margin: 0 10px;
}
</style>
```

  </template>
</demo>

## 指令

v-loading 指令可以直接用在需要加载的元素上。

| 指令名 | 说明 | 类型 |
|------|------|------|
| v-loading | 显示加载中动画 | boolean |
| element-loading-text | 加载文本内容 | string |
| element-loading-background | 加载背景色 | string |
| element-loading-custom-class | 自定义类名 | string |

### 指令修饰符

| 修饰符 | 说明 |
|------|------|
| .fullscreen | 全屏显示加载动画 |

### 示例

```vue
<!-- 基本用法 -->
<div v-loading="loading"></div>

<!-- 显示加载文本 -->
<div v-loading="loading" element-loading-text="加载中..."></div>

<!-- 自定义背景色 -->
<div v-loading="loading" element-loading-background="rgba(0, 0, 0, 0.8)"></div>

<!-- 全屏加载 -->
<div v-loading.fullscreen="loading"></div>
```

**注意**：使用 v-loading 指令时，需要确保目标元素有正确的定位样式（position 不为 static），否则可能导致加载动画无法正确显示。最简单的方法是在目标元素上添加 `position: relative`。

## 服务方法

通过调用 `$loading` 方法可以创建一个 Loading 实例。

### Loading 实例方法

| 方法名 | 说明 | 参数 |
|------|------|------|
| close | 关闭当前的 Loading 实例 | — |

### Loading 服务选项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| target | Loading 需要覆盖的 DOM 节点，可传入一个 DOM 对象或字符串，若传入字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点 | object/string | — | document.body |
| body | 同 v-loading 指令中的 body 修饰符 | boolean | — | false |
| fullscreen | 同 v-loading 指令中的 fullscreen 修饰符 | boolean | — | true |
| lock | 同 v-loading 指令中的 lock 修饰符 | boolean | — | false |
| text | 显示在加载图标下方的加载文案 | string | — | — |
| background | 遮罩背景色 | string | — | — |
| customClass | Loading 的自定义类名 | string | — | — |
