# IIP-UI 组件库介绍

IIP-UI 是一个基于 Element Plus 进行二次封装的 Vue 3 组件库，旨在提供更符合业务需求的组件，提高开发效率，统一 UI 风格。

## 为什么选择 IIP-UI？

- **基于 Element Plus**：继承了 Element Plus 的所有优秀特性
- **符合业务需求**：针对常见业务场景进行了定制化封装
- **TypeScript 支持**：完整的类型定义，提供更好的开发体验
- **易于使用**：API 设计简洁明了，易于理解和使用
- **可扩展性**：组件设计考虑了扩展性，可以满足不同场景的需求

## 特性

### 预设默认值

为常用属性设置符合项目规范的默认值，减少重复配置。

### 统一样式

在 Element Plus 基础上进行微调，确保所有项目在视觉上的一致性。

### 扩展功能

根据业务需求，为原有组件增加新的 props 或事件，提供更丰富的功能。

### 简化 API

对某些复杂组件的 API 进行简化封装，降低使用门槛。

## 设计原则

- **原子性与组合性**：组件保持原子性，同时提供灵活的组合能力
- **可配置性**：通过 props 提供丰富的配置选项
- **易用性**：API 设计简洁明了，易于理解和使用
- **高性能**：关注组件性能，避免不必要的渲染和计算
- **可访问性**：遵循 WAI-ARIA 标准，确保组件对残障人士友好
- **主题定制**：支持灵活的主题定制能力

## 安装和使用

### 安装

```bash
npm install iip-ui --save
```

### 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import IipUI from 'iip-ui'
import 'iip-ui/dist/style.css'

const app = createApp(App)
app.use(IipUI)
app.mount('#app')
```

### 按需引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { IipButton, IipLoading } from 'iip-ui'
import 'iip-ui/dist/style.css'

const app = createApp(App)
app.component(IipButton.name, IipButton)
app.component(IipLoading.name, IipLoading)
app.mount('#app')
```

## 浏览器兼容性

- Chrome >= 80
- Firefox >= 78
- Safari >= 14
- Edge >= 80
- 不支持 IE 浏览器 