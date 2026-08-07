"use client";

import { useState } from "react";
import { leadSchema } from "@/lib/validation";

type FormState = "idle" | "submitting" | "success" | "error";

export function LeadForm() {
  const [state, setState] = useState<FormState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    const validation = leadSchema.safeParse(payload);
    if (!validation.success) { setMessage(validation.error.issues[0]?.message ?? "Vui lòng kiểm tra lại thông tin."); setState("error"); return; }
    try {
      const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const result = await response.json() as { data?: { code?: string; duplicate?: boolean }; error?: { message?: string } };
      if (!response.ok) throw new Error(result.error?.message);
      form.reset(); setMessage(result.data?.duplicate ? `Yêu cầu của bạn đang được xử lý (${result.data.code}).` : `Đã gửi yêu cầu (${result.data?.code}). Chúng tôi sẽ phản hồi sớm.`); setState("success");
    } catch (error) { setMessage(error instanceof Error ? error.message : "Không thể gửi yêu cầu."); setState("error"); }
  }

  return <form className="lead-form" onSubmit={submit} noValidate aria-busy={state === "submitting"}>
    <label htmlFor="lead-name">Họ và tên<input id="lead-name" name="name" required minLength={2} autoComplete="name" placeholder="Nguyễn Văn A" /></label>
    <label htmlFor="lead-phone">Số điện thoại<input id="lead-phone" name="phone" required inputMode="tel" autoComplete="tel" placeholder="0986 555 888" /></label>
    <label htmlFor="lead-email">Email <small>(không bắt buộc)</small><input id="lead-email" name="email" type="email" autoComplete="email" placeholder="email@domain.com" /></label>
    <label htmlFor="lead-message">Nhu cầu của bạn<textarea id="lead-message" name="message" rows={4} placeholder="Quy mô phòng máy, khu vực, ngân sách dự kiến..." /></label>
    <input name="website" className="honeypot" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <button className="button" disabled={state === "submitting"}>{state === "submitting" ? "Đang gửi..." : "Gửi yêu cầu tư vấn ↗"}</button>
    {state !== "idle" && <p className={`form-message ${state}`} role={state === "error" ? "alert" : "status"}>{message}</p>}
  </form>;
}
