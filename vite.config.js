import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "./dist",
  },
  server: {
    port: 4200,
    open: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests.js",
    css: true,
  },
  plugins: [
    replace({
      "process.env.REACT_APP_API_URL": JSON.stringify(
        process.env.REACT_APP_API_URL
      ),
    }),
    react(),
  ],
});
