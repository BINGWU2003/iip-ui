# Button 按钮

常用的操作按钮，在 Element Plus 的基础上进行了扩展。

## 基础用法

基础的按钮用法。

```vue
<template>
  <iip-button>默认按钮</iip-button>
  <iip-button type="primary">主要按钮</iip-button>
  <iip-button type="success">成功按钮</iip-button>
  <iip-button type="warning">警告按钮</iip-button>
  <iip-button type="danger">危险按钮</iip-button>
  <iip-button type="info">信息按钮</iip-button>
</template>
```

## 按钮尺寸

提供三种尺寸，默认为 `default`。

```vue
<template>
  <iip-button size="large">大型按钮</iip-button>
  <iip-button>默认按钮</iip-button>
  <iip-button size="small">小型按钮</iip-button>
</template>
```

## 确认按钮

点击后会弹出确认框，确认后才会触发 click 事件。

```vue
<template>
  <iip-button confirm @click="handleConfirm">点击确认</iip-button>
  <iip-button type="danger" confirm confirmMessage="确定要删除吗？" @click="handleConfirm">
    删除
  </iip-button>
</template>

<script>
export default {
  methods: {
    handleConfirm() {
      console.log('操作已确认');
    }
  }
}
</script>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| type | 按钮类型 | string | primary / success / warning / danger / info / default / text | default |
| size | 按钮尺寸 | string | large / default / small | default |
| plain | 是否为朴素按钮 | boolean | — | false |
| round | 是否为圆角按钮 | boolean | — | false |
| circle | 是否为圆形按钮 | boolean | — | false |
| loading | 是否为加载中状态 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| link | 是否为链接按钮 | boolean | — | false |
| text | 是否为文字按钮 | boolean | — | false |
| bg | 文字按钮是否显示背景颜色 | boolean | — | false |
| color | 自定义按钮颜色 | string | — | — |
| autofocus | 是否自动获取焦点 | boolean | — | false |
| confirm | 是否为确认按钮 | boolean | — | false |
| confirmTitle | 确认框标题 | string | — | 提示 |
| confirmMessage | 确认框内容 | string | — | 确认执行此操作吗？ |

## 事件

| 事件名 | 说明 | 参数 |
|------|------|------|
| click | 点击按钮时触发，对于 confirm 类型的按钮，只有在确认后才会触发 | event |

## 插槽

| 插槽名 | 说明 |
|------|------|
| default | 按钮内容 | 