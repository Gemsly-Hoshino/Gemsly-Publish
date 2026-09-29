import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gemsly Publish",
  description: "法律声明以及其他文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '条款和规则', link: '/terms-of-services' }
    ],
  }
})
