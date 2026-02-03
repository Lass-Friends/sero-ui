import storybook from "eslint-plugin-storybook";

const eslintConfig = [
  ...storybook.configs["flat/recommended"],
  {
    ignores: ["dist/**", "storybook-static/**", "node_modules/**"],
  },
];

export default eslintConfig;
