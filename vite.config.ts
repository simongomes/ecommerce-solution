import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true, // Enable globals like 'describe', 'test', 'expect'
    setupFiles: "./src/setupTests.ts", // Optional setup file
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Ensure this points to the 'src' directory
    },
  },
});
