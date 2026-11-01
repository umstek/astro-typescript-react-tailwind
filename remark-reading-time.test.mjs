import { describe, expect, it } from "vitest";

import { remarkReadingTime } from "./remark-reading-time.mjs";

function makeTree(text) {
  return {
    type: "root",
    children: [
      {
        type: "paragraph",
        children: [{ type: "text", value: text }],
      },
    ],
  };
}

function run(tree) {
  const data = { astro: { frontmatter: {} } };
  remarkReadingTime()(tree, { data });
  return data.astro.frontmatter.readingTime;
}

describe("remarkReadingTime", () => {
  it("writes a reading time into the astro frontmatter", () => {
    const readingTime = run(makeTree("word ".repeat(600).trim()));

    expect(readingTime.minutes).toBe(3);
    expect(readingTime.text).toBe("3 min read");
  });

  it("reads plain text from the mdast tree", () => {
    const tree = {
      type: "root",
      children: [
        {
          type: "heading",
          depth: 1,
          children: [{ type: "text", value: "A heading is part of the text" }],
        },
      ],
    };

    expect(run(tree).minutes).toBeGreaterThan(0);
  });

  it("handles an empty document", () => {
    const readingTime = run(makeTree(""));

    expect(readingTime.minutes).toBe(0);
    expect(readingTime.text).toBe("0 min read");
  });
});
