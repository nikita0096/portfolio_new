// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// SSG: HTML is pre-rendered at build time (default in Astro).
	output: 'static',
	// Used for canonical URL / OpenGraph / sitemap. Replace with your real domain.
	site: 'https://mzubov.dev',
});
