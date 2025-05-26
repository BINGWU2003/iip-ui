# Select 选择器

基于 Element Plus 的 Select 组件进行二次封装，增强了数据源管理、分页、远程搜索等功能。

## 基础用法

基础的选择器用法，通过 `options-source` 属性传入选项数据。

```vue
<template>
  <iip-select v-model="value" placeholder="请选择" :options-source="options" />
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [
        { value: 'option1', label: '选项1' },
        { value: 'option2', label: '选项2' },
        { value: 'option3', label: '选项3' }
      ]
    }
  }
}
</script>
```

## 带描述信息

通过 `show-description` 属性可以显示选项的描述信息。

```vue
<template>
  <iip-select 
    v-model="value" 
    placeholder="请选择" 
    :options-source="options" 
    show-description
  />
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: [
        { value: 'option1', label: '选项1', description: '这是选项1的描述信息' },
        { value: 'option2', label: '选项2', description: '这是选项2的描述信息' },
        { value: 'option3', label: '选项3', description: '这是选项3的描述信息' }
      ]
    }
  }
}
</script>
```

## 多选模式

设置 `multiple` 属性可以启用多选模式。

```vue
<template>
  <iip-select 
    v-model="value" 
    multiple 
    collapse-tags 
    placeholder="请选择" 
    :options-source="options" 
  />
</template>

<script>
export default {
  data() {
    return {
      value: [],
      options: [
        { value: 'option1', label: '选项1' },
        { value: 'option2', label: '选项2' },
        { value: 'option3', label: '选项3' }
      ]
    }
  }
}
</script>
```

## 分页功能

对于大量选项，可以启用分页功能。

```vue
<template>
  <iip-select 
    v-model="value" 
    placeholder="请选择" 
    :options-source="options" 
    pagination
    :page-size="10"
    :total-count="options.length"
    @page-change="handlePageChange"
  />
</template>

<script>
export default {
  data() {
    return {
      value: '',
      options: Array.from({ length: 50 }, (_, index) => ({
        value: `option${index + 1}`,
        label: `选项${index + 1}`
      }))
    }
  },
  methods: {
    handlePageChange(page) {
      console.log('当前页:', page);
    }
  }
}
</script>
```

## 远程搜索

可以通过 `remote` 和 `fetch-options` 属性实现远程搜索功能。

```vue
<template>
  <iip-select 
    v-model="value" 
    filterable 
    remote 
    placeholder="请输入关键词" 
    :loading="loading" 
    :options-source="options" 
    :fetch-options="fetchOptions"
    @search="handleSearch"
  />
</template>

<script>
export default {
  data() {
    return {
      value: '',
      loading: false,
      options: []
    }
  },
  methods: {
    handleSearch(query) {
      console.log('搜索关键词:', query);
    },
    async fetchOptions(params) {
      const { keyword, page, pageSize } = params;
      this.loading = true;
      
      try {
        // 实际应用中这里会调用API
        const response = await fetch(`/api/options?keyword=${keyword}&page=${page}&pageSize=${pageSize}`);
        const result = await response.json();
        this.options = result.data;
        return result;
      } catch (error) {
        console.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>
```

## 自动选择第一项

通过 `select-first-by-default` 属性可以在选项加载完成后自动选择第一项。

```vue
<template>
  <iip-select 
    v-model="value" 
    placeholder="请选择" 
    :options-source="options" 
    select-first-by-default
  />
</template>
```

## 属性

| 属性名 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| model-value / v-model | 绑定值 | string / number / boolean / object / array | — | — |
| options-source | 选项数据源 | array | — | null |
| value-key | 选项值的键名 | string | — | 'value' |
| label-key | 选项标签的键名 | string | — | 'label' |
| show-description | 是否显示描述信息 | boolean | — | false |
| pagination | 是否开启分页 | boolean | — | false |
| page-size | 每页显示的选项数量 | number | — | 10 |
| total-count | 选项总数 | number | — | 0 |
| page | 当前页码 | number | — | 1 |
| select-first-by-default | 是否默认选择第一项 | boolean | — | false |
| auto-load | 是否自动加载远程数据 | boolean | — | true |
| fetch-options | 远程加载方法 | function | — | null |
| multiple | 是否多选 | boolean | — | false |
| disabled | 是否禁用 | boolean | — | false |
| size | 输入框尺寸 | string | large/default/small | default |
| clearable | 是否可以清空选项 | boolean | — | true |
| collapse-tags | 多选时是否将选中值按文字的形式展示 | boolean | — | false |
| collapse-tags-tooltip | 当鼠标悬停于折叠标签的文本时，是否显示所有选中的标签 | boolean | — | false |
| max-collapse-tags | 最多显示多少个标签 | number | — | 1 |
| placeholder | 占位符 | string | — | 请选择 |
| filterable | 是否可搜索 | boolean | — | false |
| allow-create | 是否允许用户创建新条目 | boolean | — | false |
| remote | 是否为远程搜索 | boolean | — | false |
| loading | 是否正在从远程获取数据 | boolean | — | false |
| custom-class | 自定义类名 | string | — | '' |

## 事件

| 事件名 | 说明 | 参数 |
|------|------|------|
| change | 选中值发生变化时触发 | 目前的选中值 |
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false |
| remove-tag | 多选模式下移除tag时触发 | 移除的tag值 |
| clear | 可清空的单选模式下用户点击清空按钮时触发 | — |
| blur | 当选择器的输入框失去焦点时触发 | (event: Event) |
| focus | 当选择器的输入框获得焦点时触发 | (event: Event) |
| page-change | 分页模式下页码变化时触发 | 当前页码 |
| search | 搜索时触发 | 搜索关键词 |
| fetch-success | 远程加载成功时触发 | 加载结果 |
| fetch-error | 远程加载失败时触发 | 错误信息 |

## 插槽

| 插槽名 | 说明 |
|------|------|
| default | 自定义选项内容，不使用 options-source 时可用 |
| prefix | Select 组件头部内容 |
| empty | 无选项时的列表内容 |
| option | 自定义选项内容，使用 options-source 时可用，参数为 { item } | 