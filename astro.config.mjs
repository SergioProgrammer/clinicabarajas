import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import React from '@astrojs/react';

export default defineConfig({
  integrations: [tailwind(), React()],
  site: 'http://localhost:4321/',
});
