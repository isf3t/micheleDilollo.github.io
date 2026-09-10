import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Automatically detect whether repository is the root user site (isf3t.github.io) or project site (micheleDilollo.github.io)
const isRootUserSite = process.env.GITHUB_REPOSITORY?.toLowerCase().endsWith('/isf3t.github.io');
const base = process.env.GITHUB_ACTIONS && !isRootUserSite ? '/micheleDilollo.github.io/' : '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://isf3t.github.io',
  base: base,
  output: 'static',
  build: {
    format: 'directory',
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
