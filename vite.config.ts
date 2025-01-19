import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const ReactCompilerConfig = {
  /* ... */
};

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
      "@public": "/public",
    },
  },
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
});
