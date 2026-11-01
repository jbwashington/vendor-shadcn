import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
const read = (p: string) => readFileSync(new URL(p, import.meta.url), "utf8");
test("src/tailwind.css is upstream verbatim", () =>
  expect(read("../src/tailwind.css")).toBe(read("../upstream/packages/shadcn/src/tailwind.css")));
test("license is upstream's", () => expect(read("../src/LICENSE")).toBe(read("../upstream/LICENSE.md")));
