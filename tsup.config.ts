import path from "path";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    button: "src/components/ui/button.tsx",
    badge: "src/components/ui/badge.tsx",
    alert: "src/components/ui/alert.tsx",
    "alert-dialog": "src/components/ui/alert-dialog.tsx",
    avatar: "src/components/ui/avatar.tsx",
    "avatar-group": "src/components/ui/avatar-group.tsx",
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
      "@/lib/utils": path.resolve(__dirname, "src/lib/utils.ts"),
    };
  },
  outDir: "dist",
  clean: true,
  tsconfig: "tsconfig.app.json",
});
