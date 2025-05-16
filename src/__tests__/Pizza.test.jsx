import { render, cleanup } from "@testing-library/react";
import { expect, afterEach, test } from "vitest";
afterEach(cleanup);

import Pizza from "../Pizza";

test("apakah ada alt text pada komponen img-nya?", async () => {
  const name = "Pizza favoritku";
  const description = "Pizza favoritku adalah Margherita";
  const src = "https://picsum.photos/200";
  const screen = render(
    <Pizza name={name} description={description} image={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("apakah img src bukan string kosong?", async () => {
  const name = "Pizza favoritku";
  const description = "Pizza favoritku adalah Margherita";
  const screen = render(<Pizza name={name} description={description} />);

  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
