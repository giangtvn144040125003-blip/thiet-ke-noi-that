export function normalizeVietnamesePhone(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("84")) return `0${digits.slice(2)}`;
  return digits;
}

export function normalizeEmail(value?: string) {
  return value?.trim().toLowerCase() || null;
}

export function createLeadCode(now = new Date(), id = crypto.randomUUID()) {
  const date = now.toISOString().slice(0, 10).replaceAll("-", "");
  return `GC-LEAD-${date}-${id.replaceAll("-", "").slice(0, 4).toUpperCase()}`;
}
