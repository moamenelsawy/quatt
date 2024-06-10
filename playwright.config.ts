import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://gorest.co.in/public/v2',
    extraHTTPHeaders: {
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    }
  },
  testDir: './src/tests',
  reporter: [['list'], ['json', { outputFile: 'test-results.json' }]],
});
