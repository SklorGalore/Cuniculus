// @ts-check
import { defineConfig } from 'astro/config';

// Static output: `npm run build` writes plain files to dist/, which
// Cloudflare (Pages or Workers static assets) serves as-is.
export default defineConfig({
  site: 'https://cuniculus.dev', // placeholder until the domain is settled
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
});
