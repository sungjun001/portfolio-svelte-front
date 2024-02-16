import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		outDir: 'public' // 빌드 결과물의 위치
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
