# IIP-UI 组件库文档

## 项目结构概述

IIP-UI 是一个基于 Element Plus 的 Vue 3 组件库，提供了更符合业务需求的组件封装。该项目使用 Vite 作为构建工具，TypeScript 进行类型定义，遵循现代前端工程化实践。

## 配置文件

### 根目录配置文件

1. **vite.config.ts**
   - 作用：Vite 的配置文件，定义了项目的构建配置
   - 包含：插件配置、路径别名、构建选项、开发服务器配置等
   - 特点：配置了库模式构建，支持 UMD 和 ES 模块输出

2. **package.json**
   - 作用：项目的包配置文件
   - 包含：项目元数据、依赖项、脚本命令等
   - 特点：定义了组件库的入口文件、类型声明文件位置、开发和构建命令

3. **tsconfig.json**
   - 作用：TypeScript 配置文件
   - 包含：编译选项、类型检查规则等
   - 特点：配置了 Vue 3 和 TypeScript 的集成环境

4. **.eslintrc.js**
   - 作用：ESLint 配置文件，用于代码检查
   - 包含：代码规范规则、插件配置等

5. **.prettierrc.js**
   - 作用：Prettier 配置文件，用于代码格式化
   - 包含：代码样式规则配置

6. **.stylelintrc.js**
   - 作用：StyleLint 配置文件，用于样式代码检查
   - 包含：CSS/SCSS 规范规则

7. **.gitignore**
   - 作用：Git 忽略文件配置，指定不需要纳入版本控制的文件

8. **index.html**
   - 作用：开发模式的 HTML 入口文件
   - 特点：加载了示例代码的入口脚本

## 核心目录结构

### packages 目录

主要包含组件库的源代码，是组件库的核心。

1. **packages/index.ts**
   - 作用：组件库的入口文件
   - 包含：组件注册、导出和安装方法
   - 特点：支持全量导入和按需导入两种使用方式

2. **packages/components/**
   - 作用：存放所有组件的目录
   - 包含：各个组件的实现代码
   - 组织结构：每个组件都有独立的目录，遵循统一的结构

3. **packages/theme-chalk/**
   - 作用：存放组件库的样式文件
   - 包含：全局变量、基础样式和组件样式
   - 特点：使用 SCSS 预处理器，支持主题定制

4. **packages/typings/**
   - 作用：存放 TypeScript 类型声明文件
   - 包含：全局类型定义、组件属性类型等
   - 特点：提供完整的类型提示和检查

### examples 目录

用于展示和测试组件库的示例代码。

1. **examples/main.ts**
   - 作用：示例应用的入口文件
   - 包含：Vue 应用创建和组件库引入

2. **examples/App.vue**
   - 作用：示例应用的根组件
   - 包含：各个组件的使用示例和演示代码

3. **examples/vite.config.ts**
   - 作用：示例项目的 Vite 配置文件
   - 特点：单独配置开发服务器和路径别名

### docs 目录

组件库的文档网站源码。

1. **docs/index.md**
   - 作用：文档首页
   - 包含：组件库简介和快速开始指南

2. **docs/components/**
   - 作用：各组件的文档
   - 包含：组件说明、API 参考、使用示例等

3. **docs/.vitepress/**
   - 作用：VitePress 文档配置
   - 特点：使用 VitePress 构建静态文档站点

## 组件实现

### Button 组件

1. **packages/components/button/index.ts**
   - 作用：Button 组件的入口文件
   - 特点：导出组件和组件安装方法

2. **packages/components/button/src/button.vue**
   - 作用：Button 组件的实现
   - 特点：扩展了 Element Plus 的 Button 组件，添加了确认功能
   - 功能：支持确认对话框，防止误操作

3. **packages/components/button/style/index.scss**
   - 作用：Button 组件的样式文件
   - 特点：自定义了按钮样式，覆盖 Element Plus 默认样式

### Loading 组件

1. **packages/components/loading/index.ts**
   - 作用：Loading 组件的入口文件
   - 特点：同时支持组件模式和服务模式

2. **packages/components/loading/src/loading.vue**
   - 作用：Loading 组件的实现
   - 特点：可以作为指令或服务调用
   - 功能：提供加载中状态的视觉反馈

3. **packages/components/loading/style/index.scss**
   - 作用：Loading 组件的样式文件
   - 特点：自定义了加载动画和遮罩样式

### Select 组件

1. **packages/components/select/index.ts**
   - 作用：Select 组件的入口文件
   - 特点：导出组件和相关类型定义

2. **packages/components/select/src/select.vue**
   - 作用：Select 组件的实现
   - 特点：扩展了 Element Plus 的 Select 组件
   - 功能：
     - 统一的数据源管理
     - 支持选项描述信息
     - 内置分页功能
     - 远程搜索和数据加载
     - 自动选择首项
     - 自定义选项渲染

3. **packages/components/select/style/index.scss**
   - 作用：Select 组件的样式文件
   - 特点：定制了选择器的样式，增加了描述信息和分页区域的样式

## 主题样式系统

1. **packages/theme-chalk/src/index.scss**
   - 作用：样式的主入口文件
   - 特点：统一导入所有组件和公共样式

2. **packages/theme-chalk/src/common/var.scss**
   - 作用：定义全局变量和主题颜色
   - 特点：使用 CSS 变量实现主题定制

3. **packages/theme-chalk/src/common/base.scss**
   - 作用：定义基础样式和重置样式
   - 特点：提供统一的基础样式规则

## 使用方式

组件库支持两种使用方式：

1. **完整引入**：一次性注册所有组件
   ```js
   import IipUI from 'iip-ui-vue3'
   import 'iip-ui-vue3/dist/style.css'
   app.use(IipUI);
   ```

2. **按需引入**：只引入需要的组件
   ```js
   import { IipButton, IipLoading } from 'iip-ui-vue3'
   import 'iip-ui-vue3/dist/style.css'
   app.component(IipButton.name, IipButton);
   ```

## 开发和构建

1. **开发命令**：`npm run dev` 或 `npm run dev:example`
   - 启动开发服务器，用于组件开发和示例测试

2. **构建命令**：`npm run build`
   - 构建组件库，生成可发布的打包文件

3. **文档开发**：`npm run docs:dev`
   - 启动文档开发服务器，用于编写和预览文档

4. **文档构建**：`npm run docs:build`
   - 构建静态文档网站，用于发布

## 总结

IIP-UI 组件库基于 Element Plus 进行封装，在保留原有功能的基础上，根据业务需求进行了扩展，提供了更符合实际使用场景的组件。项目结构清晰，采用现代化前端工程化实践，具有完整的类型支持、文档和示例。
