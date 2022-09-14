import { defineConfig } from "vite";
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
	define: {
		"process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
	},
	resolve:{
		alias:{
			'@' : path.resolve(__dirname, './src')
		},
	},
	plugins: [ vue() ],
	server: {
		port: 8100,
	},
});
