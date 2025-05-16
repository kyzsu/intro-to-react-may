export default async function postContactUs(name, email, message) {
  const apiURL = import.meta.env.VITE_API_URL;
  const res = await fetch(`${apiURL}/api/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, message }),
  });

  if (!res.ok) {
    throw new Error("Server gagal memberikan respon!");
  }

  return res.json();
}
