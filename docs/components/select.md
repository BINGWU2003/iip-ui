# Select 选择器

下拉选择器，在 Element Plus 的基础上进行了扩展。

## 基础用法

基础单选下拉选择器。

<demo>
  <SelectBasic />
  
  <template #source>

```vue
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
```

  </template>
</demo>

## 远程搜索

从服务器搜索数据，输入关键字进行查询。

<demo>
  <SelectRemote />
  
  <template #source>

```vue
<template>
  <div class="demo-select">
    <iip-select 
      v-model="value" 
      placeholder="请输入关键词搜索" 
      :remote="true"
      :loading="loading"
      :fetch-options="fetchOptions"
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
```

  </template>
</demo>

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| model-value / v-model | 绑定值 | string / number / boolean / object | — | — |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| clearable | 是否可以清空选项 | boolean | — | false |
| placeholder | 占位文本 | string | — | 请选择 |
| remote | 是否为远程搜索 | boolean | — | false |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| filterable | 是否可搜索 | boolean | — | false |
| fetch-options | 远程搜索方法 | function | — | — |
| size | 输入框尺寸 | string | large/default/small | default |

## 事件

| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当 input 失去焦点时触发 | (event: Event) |
| focus | 当 input 获得焦点时触发 | (event: Event) |

## 插槽

| 插槽名 | 说明 |
|------|------|
| default | Option 组件列表 |
| prefix | Select 组件头部内容 |
| empty | 无选项时的列表 | 