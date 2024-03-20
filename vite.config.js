import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { remarkCodeHike } from "@code-hike/mdx"  // Styles

// Import remark-gfm for GFM support
import remarkGfm from 'remark-gfm'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup")

  return {
    optimizeDeps: {
      include: ["react/jsx-runtime"],
    },
    plugins: [
      react(),
     
      mdx.default({
        // Combine remarkPlugins for both code highlighting and GFM features
        remarkPlugins: [
          [remarkCodeHike, { theme: "material-palenight" }],
          remarkGfm
        ],
      }),
    ],
  }
})