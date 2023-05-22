import { defineConfig } from "cypress";
import viteTestsConfig from "./vite-tests.config";

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: "cypress/**/*.*",
    },
  },
  includeShadowDom: true,
  component: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
    devServer: {
      framework: "react",
      bundler: "vite",
      viteConfig: viteTestsConfig
    },
  },
});
