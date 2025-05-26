## 安装

```bash
npm install iip-ui-vue3 --save
```

## 快速开始

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
import { IipButton, IipLoading } from 'iip-ui-vue3'
import 'iip-ui-vue3/dist/style.css'

const app = createApp(App)
app.component(IipButton.name, IipButton)
app.component(IipLoading.name, IipLoading)
app.mount('#app')
```

### docs/guide/introduction.md

类似地，更新文档中的安装和引入示例：

```markdown
## 安装

```bash
npm install iip-ui-vue3 --save
```

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
import { IipButton, IipLoading } from 'iip-ui-vue3'
import 'iip-ui-vue3/dist/style.css'

const app = createApp(App)
app.component(IipButton.name, IipButton)
app.component(IipLoading.name, IipLoading)
app.mount('#app')
```
```

### docs/components/ 下的组件文档

更新所有组件文档中的引入路径，例如：

```js
import { IipButton } from 'iip-ui-vue3';
```

## 3. main 和 module 字段

确保 package.json 中的 main 和 module 字段指向的文件名与您的构建配置一致：

```json
{
  "name": "iip-ui-vue3",
  "version": "1.0.0",
  "main": "dist/iip-ui-vue3.umd.js",
  "module": "dist/iip-ui-vue3.es.js",
  "types": "dist/types/index.d.ts",
  // 其他配置...
}
```

## 4. 项目和组件库接口名称

对于类型定义和组件库本身的名称，最好保持一致。在 typings 中更新接口名称，例如：

- IipUIComponent → IipUIVue3Component
- IipUIPlugin → IipUIVue3Plugin

这不是必须的，但为了保持命名一致性，建议考虑。

## 5. 发布前的版本控制

在发布新名称的包之前，确保更新版本号：

```bash
npm version patch  # 或 minor 或 major，取决于更改的重要性
```

## 其他注意事项

1. **导入兼容性**：如果您的库已经有用户在使用，可以考虑在新版本中保留对旧包名的兼容性导入支持。

2. **文档更新**：确保所有文档和示例都使用新的包名，包括在线文档、README 和示例项目。

3. **版本号策略**：如果这是一个较大的更改，考虑使用语义化版本控制，可能需要主版本号增加（major version bump）。

4. **通知用户**：在您的 README 或文档中说明包名更改的原因和迁移指南。

5. **更新项目中其他引用**：检查项目中任何可能使用旧包名的引用，如 GitHub 链接、徽章等。

通过以上更改，您的组件库将成功重命名为 `iip-ui-vue3`，同时保持功能完整性和使用体验一致性。