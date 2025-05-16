export default async function getPastOrder(orderId) {
  const apiURL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${apiURL}/api/past-order/${orderId}`);
  const data = await res.json();
  return data;
}
