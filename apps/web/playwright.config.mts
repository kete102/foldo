import { defineConfig, devices } from "@playwright/test";

const isCI = Boolean(process.env.CI);
const baseURL = "http://localhost:3001";

export default defineConfig({
	testDir: "./e2e",

	fullyParallel: true,
	forbidOnly: isCI,
	retries: isCI ? 2 : 0,
	workers: isCI ? 2 : undefined,

	reporter: [["list"], ["html", { open: "never" }]],

	use: {
		baseURL,
		trace: "retain-on-failure",
		screenshot: "only-on-failure",
		video: "retain-on-failure",
	},

	projects: [
		{
			name: "chromium",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "webkit",
			use: { ...devices["Desktop Safari"] },
		},
	],

	webServer: {
		command: isCI ? "pnpm start --port 3001" : "pnpm dev --port 3001",
		url: baseURL,
		reuseExistingServer: !isCI,
		timeout: 120_000,
	},
});
