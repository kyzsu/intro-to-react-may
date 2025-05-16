import { expect, test, vi } from "vitest";
import { render, renderHook, waitFor } from "@testing-library/react";
import createFetchMock from "vitest-fetch-mock";

import { usePizzaoftheDay } from "../usePizzaoftheDay";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const testPizza = {
  id: "napolitana",
  name: "The Napolitana Pizza",
  category: "Classic",
  description: "Tomatoes, Anchovies, Green Olives, Red Onions, Garlic",
  image: "/pizzas/napolitana.webp",
  sizes: {
    S: 12,
    M: 16,
    L: 20.5,
  },
};

function getPizzaoftheDay() {
  let pizza;

  function TestComponent() {
    pizza = usePizzaoftheDay();
    return null;
  }

  render(<TestComponent />);

  return pizza;
}

test("hasilnya adalah null ketika pertama kali muncul", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const pizza = getPizzaoftheDay();
  expect(pizza).toBeNull();
});

test("hasilnya adalah null ketika pertama kali muncul (menggunakan renderHook)", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaoftheDay(""));
  expect(result.current).toBeNull();
});

test("hasilnya adalah mengembalikan potd (api-nya berjalan dan hasil sesuai)", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => usePizzaoftheDay(""));
  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });

  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
