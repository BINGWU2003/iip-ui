# IIP-UI 组件库

基于 Element Plus 的 Vue 3 组件库，提供更符合业务需求的组件封装。

## 特性

- 基于 Vue 3 和 TypeScript 开发
- 继承 Element Plus 的所有功能
- 提供更符合业务需求的组件封装
- 支持按需引入
- 提供完整的类型定义

## 安装

```bash
npm install iip-ui --save
```

## 快速开始

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
// 或者使用 app.use(IipButton)
app.mount('#app')
```

## 已实现组件

- IipButton：按钮组件，扩展了确认功能
- IipLoading：加载组件，支持指令和服务两种调用方式

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建组件库
npm run build

# 运行测试
npm run test

# 代码格式化
npm run format
```

## 许可证

MIT 