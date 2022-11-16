import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { comlink } from "vite-plugin-comlink";

export default defineConfig({
  plugins: [react(), comlink()],
  worker: {
    plugins: [comlink()],
  },
});
