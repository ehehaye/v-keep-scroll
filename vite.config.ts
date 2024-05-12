/// <reference types="vitest" />
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";
import { defineConfig } from "vite";
import packageJson from "./package.json";

const getPackageName = () => {
  return packageJson.name;
};

const getPackageNameCamelCase = () => {
  try {
    return getPackageName().replace(/-./g, char => char[1].toUpperCase());
  } catch (err) {
    throw new Error("Name property in package.json is missing.");
  }
};

const fileName = {
  es: `index.mjs`,
  cjs: `index.cjs`,
  iife: `index.iife.js`,
};

export default defineConfig({
  base: "./",
  build: {
    outDir: "./build/dist",
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
    },
    rollupOptions: {
      output: [
        {
          format: "es",
          entryFileNames: fileName.es,
        },
        {
          format: "cjs",
          entryFileNames: fileName.cjs,
        },
        {
          format: "iife",
          name: getPackageNameCamelCase(),
          entryFileNames: fileName.iife,
          globals: {
            vue: "Vue",
            "@vueuse/core": "VueUse",
          },
        },
      ],
      external: ["vue", "@vueuse/core"],
    },
  },
  plugins: [vue(), vueJsx()],
  test: {},
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@@", replacement: path.resolve(__dirname) },
      {
        find: getPackageName(),
        replacement: path.resolve(__dirname, "src/index"),
      },
    ],
  },
});
