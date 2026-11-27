import { describe, expect, it } from "vitest";
import { megabytesToBytes } from "./file-sice";

describe("megabytesToBytes", () => {
	it("converts megabytes to bytes", () => {
		expect(megabytesToBytes(1)).toBe(1_000_000);
	});

	it("converts the free plan file size limit", () => {
		expect(megabytesToBytes(50)).toBe(50_000_000);
	});

	it("converts the pro plan file size limit", () => {
		expect(megabytesToBytes(500)).toBe(500_000_000);
	});

	it("returns zero for zero megabytes", () => {
		expect(megabytesToBytes(0)).toBe(0);
	});
});
