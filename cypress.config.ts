import { defineConfig } from "cypress";

export default defineConfig({  
  e2e: {
    baseUrl: 'http://localhost:8080',
    experimentalStudio: true,
    pageLoadTimeout: 100000,
  }
})