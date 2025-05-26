export default {
  title: 'IIP-UI 组件库',
  description: '基于 Element Plus 的 Vue 3 组件库',
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/button' }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '介绍', link: '/guide/introduction' }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          items: [
            { text: 'Button 按钮', link: '/components/button' }
          ]
        },
        {
          text: '表单组件',
          items: [
            { text: 'Select 选择器', link: '/components/select' }
          ]
        },
        {
          text: '反馈组件',
          items: [
            { text: 'Loading 加载', link: '/components/loading' }
          ]
        }
      ]
    }
  }
} 