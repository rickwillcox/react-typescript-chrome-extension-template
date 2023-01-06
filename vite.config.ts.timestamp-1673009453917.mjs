// vite.config.ts
import { defineConfig } from "file:///Users/rickwillcox/Documents/react-chrome-extension-template/node_modules/vite/dist/node/index.js";
import react from "file:///Users/rickwillcox/Documents/react-chrome-extension-template/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///Users/rickwillcox/Documents/react-chrome-extension-template/node_modules/vite-plugin-svgr/dist/index.mjs";
import { crx } from "file:///Users/rickwillcox/Documents/react-chrome-extension-template/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "React Content Script",
  version: "1.0.0",
  action: {
    default_title: "Popup",
    default_popup: "index.html",
    default_icon: "logo192.png"
  },
  icons: {},
  content_scripts: [
    {
      matches: ["<all_urls>"],
      js: ["src/Entry.tsx"],
      media: []
    }
  ]
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true
      }
    }),
    crx({ manifest: manifest_default })
  ],
  build: {
    minify: false
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcmlja3dpbGxjb3gvRG9jdW1lbnRzL3JlYWN0LWNocm9tZS1leHRlbnNpb24tdGVtcGxhdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9yaWNrd2lsbGNveC9Eb2N1bWVudHMvcmVhY3QtY2hyb21lLWV4dGVuc2lvbi10ZW1wbGF0ZS92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcmlja3dpbGxjb3gvRG9jdW1lbnRzL3JlYWN0LWNocm9tZS1leHRlbnNpb24tdGVtcGxhdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xuaW1wb3J0IHN2Z3IgZnJvbSBcInZpdGUtcGx1Z2luLXN2Z3JcIjtcbmltcG9ydCB7IGNyeCB9IGZyb20gXCJAY3J4anMvdml0ZS1wbHVnaW5cIjtcbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBzdmdyKHtcbiAgICAgIHN2Z3JPcHRpb25zOiB7XG4gICAgICAgIGljb246IHRydWUsXG4gICAgICAgIC8vIC4uLnN2Z3Igb3B0aW9ucyAoaHR0cHM6Ly9yZWFjdC1zdmdyLmNvbS9kb2NzL29wdGlvbnMvKVxuICAgICAgfSxcbiAgICB9KSxcbiAgICAvLyBCdWlsZCBDaHJvbWUgRXh0ZW5zaW9uXG4gICAgY3J4KHsgbWFuaWZlc3QgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgLy8gZG9udCBtaW5pZnkgdGhlIGNvZGVcbiAgICBtaW5pZnk6IGZhbHNlLFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNXLFNBQVMsb0JBQW9CO0FBQ25ZLE9BQU8sV0FBVztBQUNsQixPQUFPLFVBQVU7QUFDakIsU0FBUyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlwQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsTUFDSCxhQUFhO0FBQUEsUUFDWCxNQUFNO0FBQUEsTUFFUjtBQUFBLElBQ0YsQ0FBQztBQUFBLElBRUQsSUFBSSxFQUFFLDJCQUFTLENBQUM7QUFBQSxFQUNsQjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBRUwsUUFBUTtBQUFBLEVBQ1Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
