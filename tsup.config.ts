import path from "path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    button: "src/components/ui/button/index.ts",
    badge: "src/components/ui/badge/index.ts",
    alert: "src/components/ui/alert/index.ts",
    avatar: "src/components/ui/avatar/index.ts",
    "avatar-group": "src/components/ui/avatar-group/index.ts",
    utils: "src/lib/cn.ts",
  },
  format: ["cjs", "esm"],
  dts: {
    resolve: true,
    compilerOptions: {
      moduleResolution: "bundler",
      jsx: "react-jsx",
    },
  },
  external: ["react", "react-dom"],
  esbuildOptions(options) {
    options.alias = {
      ...options.alias,
      "@/lib/cn": path.resolve(__dirname, "src/lib/cn.ts"),
    };
  },
  outDir: "dist",
  clean: true,
  tsconfig: "tsconfig.build.json",
  onSuccess: "cp src/styles/globals.css dist/globals.css",
});
