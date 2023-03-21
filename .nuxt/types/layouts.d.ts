import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "coming-soon-layout" | "default"
declare module "/Users/kingsley/Documents/projects/Centenum/ire/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}