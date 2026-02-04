import type { Preview } from "@storybook/react-vite";
import { withThemeByClassName } from "@storybook/addon-themes";
import { create } from "storybook/theming";
import "../src/styles/globals.css";

const seroTheme = create({
  base: "dark",
  appBg: "#000000",
  appContentBg: "#000000",
  barBg: "#000000",
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
    options: {
      storySort: (a, b) => {
        // First sort by title (component) alphabetically
        const titleCompare = a.title.localeCompare(b.title);
        if (titleCompare !== 0) return titleCompare;
        // Within same component: Docs at the bottom
        if (a.type === "docs" && b.type !== "docs") return 1;
        if (a.type !== "docs" && b.type === "docs") return -1;
        // Default at the top
        if (a.name === "Default" && b.name !== "Default") return -1;
        if (a.name !== "Default" && b.name === "Default") return 1;
        // Then alphabetical by story name
        return a.name.localeCompare(b.name);
      },
    },
    docs: {
      theme: seroTheme,
    },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "",
        dark: "dark",
      },
      defaultTheme: "dark",
    }),
  ],
};

export default preview;
