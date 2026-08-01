"use client";

import { useState } from "react";
import Toast, { type ToastState } from "@/components/Toast";

export default function SignupForm({ courseTag }: { courseTag: string }) {
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [toast, setToast] = useState<ToastState>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("loading");
    setToast(null);

    try {
      const response = await fetch("https://dancesquarese.hu/api/v2/smtp", {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          phone: data.get("phone"),
          email: data.get("email"),
          course: courseTag,
        }),
      });
      const result = await response.json();

      if (result.message === "OK") {
        setToast({ type: "success", title: "Sikeres jelentkezés!", description: "Hamarosan felvesszük veled a kapcsolatot." });
        form.reset();
      } else {
        setToast({ type: "error", title: "Sikertelen email küldés", description: "Kérünk, keress a kapcsolat menüpont alatt." });
      }
    } catch {
      setToast({ type: "error", title: "Sikertelen email küldés", description: "Kérünk, keress a kapcsolat menüpont alatt." });
    } finally {
      setStatus("idle");
    }
  }

  return (
    <div className="glass rounded-lg p-8">
      <h3 className="font-heading text-2xl text-center mb-6">Jelentkezz!</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm mb-1.5 text-muted-foreground">
            Név
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Ide írd a neved"
            className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm mb-1.5 text-muted-foreground">
            Telefonszám
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="Ide írd a telefonszámod"
            className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-1.5 text-muted-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Ide írd az email-címedet"
            className="w-full rounded-md border border-border bg-background/60 px-4 py-3 text-sm outline-none focus:border-accent transition-colors"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-full bg-primary py-3.5 text-sm font-medium tracking-wide text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60 cursor-pointer"
        >
          {status === "loading" ? "Küldés..." : "Küldés"}
        </button>
      </form>
      <Toast toast={toast} onDismiss={() => setToast(null)} />
    </div>
  );
}
