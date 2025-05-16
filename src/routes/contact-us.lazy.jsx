import { useMutation } from "@tanstack/react-query";
import { createLazyFileRoute } from "@tanstack/react-router";

import postContactUs from "../api/postContactUs";

export const Route = createLazyFileRoute("/contact-us")({
  component: ContactUsRoute,
});

function ContactUsRoute() {
  const { isSuccess, mutate } = useMutation({
    mutationFn: function (e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      return postContactUs(
        formData.get("name"),
        formData.get("email"),
        formData.get("message"),
      );
    },
  });

  return (
    <div className="contact">
      <h2>Kontak Kami</h2>
      {isSuccess ? (
        <h3>Berhasil dikirim</h3>
      ) : (
        <form onSubmit={mutate}>
          <input type="text" name="name" placeholder="Nama Anda" />
          <input type="email" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Pesan Anda"></textarea>
          <button>Kirim</button>
        </form>
      )}
    </div>
  );
}
