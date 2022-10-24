/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import Index from "../../src/routes/Index.svelte";
import { render } from "@testing-library/svelte";

describe("Test if Jest is working", () => {
  test("Welcome", () => {
    const { getByText } = render(Index);
    expect(getByText("Spotify data calculator")).toBeInTheDocument();
  });
});
