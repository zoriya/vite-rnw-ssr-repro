import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactNative from "vite-plugin-react-native-web";
import { cjsInterop } from "vite-plugin-cjs-interop";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		reactNative(),
		cjsInterop({
			dependencies: [
				"inline-style-prefixer",
				"inline-style-prefixer/**",
			],
		}),
	],
});
