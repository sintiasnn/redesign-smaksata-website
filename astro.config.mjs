import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  site: 'https://sintiasnn.github.io',
  base: '/redesign-smaksata-website',
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
})
