import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Gemsly Legal & Compliance",
  description: "Official legal documentation for Gemsly — Terms of Service, Privacy Policy, and open-source licensing and copyright notices.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Terms of Service', link: '/terms-of-services' },
      { text: 'Privacy Policy', link: '/privacy-policy' }
    ],
    footer: {
      message: 'Released under the Attribution-NonCommercial 4.0 International License.',
      copyright: 'Copyright © Gemsly. All Rights Reserved.'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Gemsly-Hoshino/Gemsly-Publish' }
    ]
  }
})
