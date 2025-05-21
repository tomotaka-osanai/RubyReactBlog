import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import RubyPlugin from "vite-plugin-ruby";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Dockerで使うなら必須！
    port: 3036, // 必要ならポートも指定
    hmr: {
      host: "host.docker.internal", // or あなたのPCのIPアドレス
      port: 3036,
    },
    watch: {
      usePolling: true,
    },
  },
  plugins: [react(), RubyPlugin()],
  build: {
    rollupOptions: {
      // Customize the Rollup build process
      input: {
        // Specify the entry points for your application
        application: resolve(
          __dirname,
          "app/javascript/entrypoints/application.jsx"
        ),
      },
      external: [
        "@hotwired/turbo-rails",
        "@hotwired/stimulus",
        "@hotwired/stimulus-loading",
        "controllers",
      ],
    },
    outDir: "app/assets/builds",
    emptyOutDir: true,
  },
});
