# IIP-UI Vue3 组件库项目结构文档

## 项目概述

IIP-UI Vue3 是一个基于 Element Plus 的 Vue 3 组件库，采用 TypeScript 开发，使用 Vite 作为构建工具。项目提供了企业级中后台产品所需的设计语言和组件实现，遵循现代前端工程化最佳实践。

## 项目架构

```
iip-ui-vue3/
├── packages/                 # 组件库源码
│   ├── index.ts             # 组件库入口文件
│   ├── components/          # 组件源码目录
│   ├── theme-chalk/         # 样式主题目录
│   └── typings/             # TypeScript 类型定义
├── examples/                # 示例和演示
├── docs/                    # 文档网站
├── dist/                    # 构建产物
├── node_modules/            # 依赖包
├── 配置文件群                # 各种配置文件
└── README.md               # 项目说明文档
```

## 根目录文件详解

### 核心配置文件

#### `package.json`
- **作用**: 项目包管理配置文件
- **关键配置**:
  - `name`: "iip-ui-vue3" - 包名
  - `version`: "1.0.7" - 当前版本
  - `main`: "dist/iip-ui-vue3.umd.js" - UMD 格式入口
  - `module`: "dist/iip-ui-vue3.es.js" - ES 模块入口
  - `types`: "index.d.ts" - TypeScript 类型声明
  - `files`: 指定发布时包含的文件
- **脚本命令**:
  - `dev`: 开发模式启动
  - `dev:example`: 启动示例项目
  - `build`: 构建组件库
  - `docs:dev/build`: 文档开发和构建

#### `vite.config.ts`
- **作用**: Vite 构建工具配置
- **主要配置**:
  - 库模式构建设置
  - 支持 UMD 和 ES 两种格式输出
  - Vue 插件配置
  - 路径别名设置
  - 外部依赖处理 (vue, element-plus)

#### `tsconfig.json`
- **作用**: TypeScript 编译配置
- **关键设置**:
  - 目标 ES2015
  - 模块系统 ESNext
  - 启用 JSX 支持
  - 类型检查规则
  - 路径映射

### 代码规范配置

#### `.eslintrc.js`
- **作用**: ESLint 代码检查配置
- **规则**: Vue3、TypeScript、Prettier 集成规范

#### `.prettierrc.js`
- **作用**: 代码格式化配置
- **设置**: 统一的代码风格规则

#### `.stylelintrc.js`
- **作用**: CSS/SCSS 代码规范检查
- **规则**: SCSS 语法检查和样式规范

#### `.gitignore`
- **作用**: Git 版本控制忽略文件配置
- **内容**: 忽略 node_modules、dist、缓存文件等

### 入口文件

#### `index.html`
- **作用**: 开发模式的 HTML 入口
- **功能**: 加载开发环境的主脚本

#### `index.d.ts`
- **作用**: 组件库根级别 TypeScript 类型声明
- **内容**: 导出所有组件和类型定义

#### `components.d.ts`
- **作用**: 自动生成的组件类型声明
- **功能**: 为 IDE 提供组件智能提示

## packages 目录详解

### `packages/index.ts`
- **作用**: 组件库的主入口文件
- **功能**:
  - 导入所有组件 (IipButton, IipLoading, IipSelect)
  - 定义 install 方法用于 Vue.use() 全局注册
  - 导出单个组件用于按需引入
  - 提供默认导出对象

### `packages/components/` 组件目录

#### 组件目录结构 (以 button 为例)
```
packages/components/button/
├── index.ts           # 组件入口文件
├── src/              # 组件源码
│   └── button.vue    # 组件实现
└── style/            # 组件样式
    └── index.scss    # 样式文件
```

#### `packages/components/button/`
- **index.ts**: 组件导出和安装方法
- **src/button.vue**: 
  - 基于 Element Plus Button 扩展
  - 新增 `confirm` 确认对话框功能
  - 支持自定义确认标题和消息
  - 完整继承 Element Plus Button 属性
- **style/index.scss**: 自定义按钮样式和主题变量

#### `packages/components/loading/`
- **index.ts**: 组件导出，支持组件和服务两种使用方式
- **src/loading.vue**: 
  - 自定义加载动画组件
  - 支持全屏和局部加载
  - 可自定义加载文本和背景色
  - 提供优雅的动画效果
- **style/index.scss**: 加载动画和遮罩样式

#### `packages/components/select/`
- **index.ts**: 组件导出和类型定义
- **src/select.vue**: 
  - 基于 Element Plus Select 扩展
  - 支持统一数据源 (`options-source`)
  - 支持选项描述信息显示
  - 内置分页功能
  - 远程搜索和异步数据加载
  - 自定义选项渲染插槽
- **style/index.scss**: 选择器扩展样式

### `packages/theme-chalk/` 主题样式

#### `packages/theme-chalk/src/`
- **index.scss**: 
  - 样式总入口文件
  - 导入所有组件样式
  - 导入公共样式和变量
- **common/**: 公共样式目录
  - 全局变量定义
  - 基础样式重置
  - 主题色彩系统

### `packages/typings/` 类型定义

#### `packages/typings/index.d.ts`
- **作用**: 组件库完整的 TypeScript 类型定义
- **内容**:
  - `IipUIComponent` 接口：定义组件基础结构
  - `LoadingOptions` 接口：Loading 服务配置
  - `SelectOptionItem` 接口：Select 选项数据结构
  - `FetchOptionsParams` 接口：远程搜索参数
  - 各组件的导出类型声明
  - Vue 全局组件类型扩展

## examples 目录详解

### 示例项目结构
```
examples/
├── main.ts           # 示例应用入口
├── App.vue          # 示例根组件
├── index.html       # 示例 HTML 入口
├── vite.config.ts   # 示例项目 Vite 配置
└── components.d.ts  # 组件类型声明
```

#### `examples/main.ts`
- **作用**: 示例应用的启动入口
- **功能**: 
  - 创建 Vue 应用实例
  - 引入并注册 IIP-UI 组件库
  - 引入 Element Plus 和样式

#### `examples/App.vue`
- **作用**: 示例应用的根组件
- **内容**: 
  - 所有组件的使用演示
  - Button 组件各种状态和功能展示
  - Loading 组件指令和服务使用
  - Select 组件高级功能演示
  - 响应式设计和交互逻辑

#### `examples/vite.config.ts`
- **作用**: 示例项目的独立 Vite 配置
- **特点**: 针对示例项目优化的开发配置

## docs 目录详解

### 文档网站结构
```
docs/
├── .vitepress/       # VitePress 配置
│   ├── config.js    # 文档网站配置
│   ├── components/  # 文档组件
│   └── theme/       # 文档主题
├── components/       # 组件文档
├── guide/           # 使用指南
└── index.md         # 文档首页
```

#### `docs/.vitepress/config.js`
- **作用**: VitePress 文档网站配置
- **配置**:
  - 网站标题和描述
  - 导航菜单结构
  - 侧边栏配置
  - 主题定制选项

#### `docs/index.md`
- **作用**: 文档网站首页
- **内容**: 组件库介绍和快速开始指南

#### `docs/components/`
- **作用**: 各组件的详细文档
- **内容**: 
  - 组件说明
  - API 参考
  - 使用示例
  - 最佳实践

## dist 目录详解

### 构建产物
```
dist/
├── iip-ui-vue3.umd.js    # UMD 格式包
├── iip-ui-vue3.es.js     # ES 模块包
├── style.css             # 组件样式
└── types/                # 类型声明文件
```

- **UMD 格式**: 用于直接在浏览器中引入
- **ES 模块**: 用于模块化项目和 Tree Shaking
- **样式文件**: 包含所有组件的样式
- **类型文件**: 提供完整的 TypeScript 支持

## 开发工作流

### 本地开发
1. **组件开发**: 修改 `packages/components/` 下的组件
2. **样式开发**: 修改 `packages/theme-chalk/` 下的样式
3. **实时预览**: 使用 `npm run dev:example` 查看效果
4. **类型检查**: TypeScript 提供实时类型检查

### 测试验证
1. **示例测试**: 在 `examples/App.vue` 中添加测试用例
2. **文档验证**: 在 `docs/` 中编写和验证文档
3. **构建测试**: 使用 `npm run build` 验证构建

### 发布流程
1. **版本更新**: 修改 `package.json` 版本号
2. **构建**: 执行 `npm run build` 生成发布文件
3. **文档**: 执行 `npm run docs:build` 构建文档
4. **发布**: 执行 `npm publish` 发布到 npm

## 项目特色

### 1. 模块化设计
- 每个组件独立目录和样式
- 支持完整引入和按需引入
- 清晰的依赖关系

### 2. TypeScript 支持
- 完整的类型定义
- 编译时类型检查
- IDE 智能提示

### 3. 工程化实践
- 代码规范检查和格式化
- 自动化构建和发布
- 完整的文档系统

### 4. 开发体验
- 热重载开发环境
- 丰富的示例代码
- 详细的组件文档

## 技术栈

- **框架**: Vue 3.x
- **语言**: TypeScript
- **构建**: Vite
- **UI库**: Element Plus
- **文档**: VitePress
- **代码规范**: ESLint + Prettier + StyleLint
- **包管理**: pnpm

## 总结

IIP-UI Vue3 组件库具有完整的项目结构和工程化配置，从组件开发、样式管理、类型定义到文档维护都有相应的规范和工具支持。项目采用 monorepo 结构，模块清晰，便于维护和扩展。
