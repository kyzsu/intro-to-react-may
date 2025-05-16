export default async function getPastOrders(page) {
  const apiURL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${apiURL}/api/past-orders?page=${page}`);
  const data = await res.json();
  return data;
}
