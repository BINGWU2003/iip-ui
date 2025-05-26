# Loading 加载

用于页面和区块的加载中状态。

## 区域加载

在表格等容器中加载数据时显示。

```vue
<template>
  <div v-loading="loading">
    这里是内容区域
  </div>
  <iip-button @click="loading = !loading">切换 Loading 状态</iip-button>
</template>

<script>
export default {
  data() {
    return {
      loading: false
    }
  }
}
</script>
```

## 自定义文本

可以自定义加载文本。

```vue
<template>
  <div v-loading="loading" element-loading-text="加载中，请稍候...">
    这里是内容区域
  </div>
</template>
```

## 服务方式调用

通过 JavaScript 代码调用全屏加载。

```vue
<template>
  <iip-button @click="openFullscreenLoading">打开全屏加载</iip-button>
</template>

<script>
import { IipLoading } from 'iip-ui';

export default {
  methods: {
    openFullscreenLoading() {
      const loading = IipLoading.service({
        text: '全屏加载中...'
      });
      
      setTimeout(() => {
        loading.close();
      }, 3000);
    }
  }
}
</script>
```

## Loading 指令属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| v-loading | 是否显示加载中 | boolean | — | false |
| element-loading-text | 加载文本 | string | — | — |
| element-loading-background | 背景色 | string | — | — |
| element-loading-custom-class | 自定义类名 | string | — | — |

## Loading 服务方法

通过 `IipLoading.service()` 方法调用，该方法接收一个配置对象作为参数，具体属性如下：

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| target | 加载需要覆盖的 DOM 节点，可传入一个 DOM 对象或字符串；若为字符串，则会将其作为参数传入 document.querySelector 以获取到对应 DOM 节点 | string / HTMLElement | — | document.body |
| text | 加载文本 | string | — | — |
| background | 背景色 | string | — | — |
| fullscreen | 是否全屏显示 | boolean | — | true |
| customClass | 自定义类名 | string | — | — |

## Loading 实例方法

| 方法名 | 说明 | 参数 |
|------|------|------|
| close | 关闭加载 | — | 