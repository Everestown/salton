import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    host: 'setDefaultResultOrder',
    port: 3000
  },
  // routes: [
  //   { path: '/home', component: 'Home' },
  //   { path: '/roadmap', component: 'Roadmap' },
  // ],
  css: {
    postcss: './postcss.config.js',
  },
});