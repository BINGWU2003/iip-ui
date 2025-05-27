# IIP-UI Vue3

基于 Element Plus 的 Vue 3 组件库，提供企业级中后台产品的设计语言和组件实现。

[![NPM version](https://img.shields.io/npm/v/iip-ui-vue3.svg)](https://www.npmjs.com/package/iip-ui-vue3)
[![NPM downloads](https://img.shields.io/npm/dm/iip-ui-vue3.svg)](https://www.npmjs.com/package/iip-ui-vue3)
[![License](https://img.shields.io/npm/l/iip-ui-vue3.svg)](https://github.com/your-username/iip-ui-vue3/blob/main/LICENSE)

## ✨ 特性

- 🎨 基于 Element Plus 设计语言，提供一致的视觉体验
- 📦 开箱即用的高质量 Vue 3 组件
- 🔧 支持完整引入和按需引入
- 💪 使用 TypeScript 编写，提供完整的类型定义
- 🎭 支持自定义主题
- 🌍 支持国际化
- 📱 响应式设计

## 📦 安装

```bash
# 使用 npm
npm install iip-ui-vue3 --save

# 使用 yarn
yarn add iip-ui-vue3

# 使用 pnpm
pnpm add iip-ui-vue3
```

## 🔨 使用

### 完整引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import IipUI from 'iip-ui-vue3'
import 'iip-ui-vue3/dist/style.css'

const app = createApp(App)
app.use(IipUI)
app.mount('#app')
```

### 按需引入

```js
import { createApp } from 'vue'
import App from './App.vue'
import { IipButton, IipLoading, IipSelect } from 'iip-ui-vue3'
import 'iip-ui-vue3/dist/style.css'

const app = createApp(App)
app.component(IipButton.name, IipButton)
app.component(IipLoading.name, IipLoading)
app.component(IipSelect.name, IipSelect)
app.mount('#app')
```

## 📚 组件

本组件库基于 Element Plus 扩展，提供以下组件：

- **IipButton** - 按钮组件，扩展了确认对话框功能
- **IipLoading** - 加载组件，支持指令和服务两种调用方式
- **IipSelect** - 选择器组件，支持分页、远程搜索等高级功能

更多详细使用方法请参考文档或示例代码。

## 🎨 主题定制

### CSS 变量

```css
:root {
  --iip-color-primary: #0078d4;
  --iip-color-success: #107c10;
  --iip-color-warning: #ff8c00;
  --iip-color-danger: #d13438;
  --iip-color-info: #605e5c;
}
```

### SCSS 变量

```scss
$iip-primary-color: #0078d4;
$iip-success-color: #107c10;
$iip-warning-color: #ff8c00;
$iip-danger-color: #d13438;
$iip-info-color: #605e5c;
```

## 🔧 开发

### 环境要求

- Node.js >= 16
- Vue 3.x
- Element Plus 2.x

### 本地开发

```bash
# 克隆项目
git clone https://github.com/your-username/iip-ui-vue3.git
cd iip-ui-vue3

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 运行示例
npm run dev:example

# 启动文档
npm run docs:dev
```

### 构建

```bash
# 构建组件库
npm run build

# 构建文档
npm run docs:build
```

### 测试

```bash
# 运行测试
npm run test

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 📄 License

[MIT](LICENSE)

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

### 贡献指南

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开一个 Pull Request

## 📞 联系我们

如果你有任何问题或建议，请通过以下方式联系我们：

- 提交 [Issue](https://github.com/your-username/iip-ui-vue3/issues)
- 发送邮件到: your-email@example.com

## 🙏 致谢

感谢 [Element Plus](https://element-plus.org/) 团队提供的优秀基础组件。
