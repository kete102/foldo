import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	test: {
		environment: "node",
		include: ["src/**/*.{test,spec}.{ts,tsx}"],
		coverage: {
			provider: "v8",
			reporter: ["text", "html", "lcov"],
			reportsDirectory: "./coverage",
			include: ["src/**/*.{ts,tsx}"],
			exclude: ["**/*.test.*", "**/*.spec.*", "**/*.d.ts"],
		},
	},
});
