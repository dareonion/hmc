// @ts-check
import { defineConfig } from 'astro/config';

console.log('--- Loading astro.config.mjs ---'); // Add this line
const base = '/hmc/'; // Or '/your-base'
console.log(`--- Using base: ${base} ---`);   // Add this line

export default defineConfig({
  site: 'https://dareonion.github.io',
  base: base,
});
