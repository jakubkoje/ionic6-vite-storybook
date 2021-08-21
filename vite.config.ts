import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VitePluginComponents from "vite-plugin-components";
import VitePluginIcons, {ViteIconsResolver} from "vite-plugin-icons";
import VitePluginWindicss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`
    },
  },
  plugins: [
    vue(),
    VitePluginComponents({
      dirs: ['src/plugins'],
      globalComponentsDeclaration: true,
      customComponentResolvers: [
          ViteIconsResolver(),
        (name) => {
        if(name.startsWith('Ion')) {
          return {importName: toPascalCase(name), path: '@ionic/vue'}
        }
        }
      ]
    }),
    VitePluginIcons(),
    VitePluginWindicss()
  ],

})

function toPascalCase(text: string) {
  return text.replace(/(^\w|-\w)/g, clearAndUpper);
}

function clearAndUpper(text: string) {
  return text.replace(/-/, "").toUpperCase();
}
