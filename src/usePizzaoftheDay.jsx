import { useState, useEffect } from "react";

export const usePizzaoftheDay = () => {
  const [pizzaoftheDay, setPizzaoftheDay] = useState(null);

  useEffect(() => {
    async function fetchPizzaoftheDay() {
      const apiURL = import.meta.env.VITE_API_URL;
      const response = await fetch(`${apiURL}/api/pizza-of-the-day`);
      const resJson = await response.json();
      setPizzaoftheDay(resJson);
    }

    fetchPizzaoftheDay();
  }, []);

  return pizzaoftheDay;
};
