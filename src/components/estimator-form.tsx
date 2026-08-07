"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { calculateEstimate } from "@/lib/estimator";
import { estimateSchema, type EstimateInput } from "@/lib/validation";
import styles from "./estimator-form.module.css";

const initial: EstimateInput = { areaSqm: 100, machineCount: 30, segment: "gaming", configurationLevel: "balanced", includeInterior: true, includeAircon: true, includeCamera: false, province: "" };
const formatCurrency = (value: number) => `${value.toLocaleString("vi-VN")}đ`;

export function EstimatorForm() {
  const [values, setValues] = useState<EstimateInput>(initial);
  const [submitted, setSubmitted] = useState(false);
  const result = useMemo(() => calculateEstimate(values), [values]);

  function update<K extends keyof EstimateInput>(key: K, value: EstimateInput[K]) { setValues((current) => ({ ...current, [key]: value })); setSubmitted(false); }
  function submit(event: React.FormEvent<HTMLFormElement>) { event.preventDefault(); if (estimateSchema.safeParse(values).success) setSubmitted(true); }

  return <div className={styles.layout}><form className={styles.form} onSubmit={submit}><div className={styles.formHeader}><span>01</span><div><h2>Thông tin dự án</h2><p>Chọn các hạng mục bạn muốn đầu tư.</p></div></div><div className={styles.fields}><label className={styles.field}>Diện tích mặt bằng (m²)<input type="number" min="20" max="5000" value={values.areaSqm} onChange={(event) => update("areaSqm", Number(event.target.value))} /></label><label className={styles.field}>Số lượng máy<input type="number" min="10" max="500" value={values.machineCount} onChange={(event) => update("machineCount", Number(event.target.value))} /></label><label className={styles.field}>Phân khúc<select value={values.segment} onChange={(event) => update("segment", event.target.value as EstimateInput["segment"])}><option value="standard">Phổ thông</option><option value="gaming">Gaming</option><option value="premium">Cyber cao cấp</option></select></label><label className={styles.field}>Cấu hình máy<select value={values.configurationLevel} onChange={(event) => update("configurationLevel", event.target.value as EstimateInput["configurationLevel"])}><option value="entry">Khởi đầu</option><option value="balanced">Cân bằng</option><option value="high">Hiệu năng cao</option></select></label></div><fieldset className={styles.choices}><legend>Hạng mục cần tư vấn</legend><div className={styles.checks}><label className={styles.check}><input type="checkbox" checked={values.includeInterior} onChange={(event) => update("includeInterior", event.target.checked)} /> Nội thất</label><label className={styles.check}><input type="checkbox" checked={values.includeAircon} onChange={(event) => update("includeAircon", event.target.checked)} /> Điều hòa</label><label className={styles.check}><input type="checkbox" checked={values.includeCamera} onChange={(event) => update("includeCamera", event.target.checked)} /> Camera</label></div></fieldset><button className={`${styles.submit} button`} type="submit">Cập nhật dự toán <span>↗</span></button></form><aside className={styles.result} aria-live="polite"><div className={styles.resultVisual}><Image src="/images/investment-lounge-hd-v3.webp" alt="Không gian gaming minh họa cho dự toán" fill quality={90} sizes="(max-width: 820px) 100vw, 52vw" /><span>Dự toán đầu tư</span></div><p className="eyebrow">Khoảng đầu tư tham khảo</p><strong className={styles.amount}>{formatCurrency(result.totalMin)} – {formatCurrency(result.totalMax)}</strong><p className={styles.average}>Trung bình khoảng {formatCurrency(result.costPerMachine)} / máy.</p>{submitted && <p className={styles.ready}>Dự toán đã sẵn sàng. Liên hệ để nhận bảng chi tiết theo mặt bằng thực tế.</p>}<ul className={styles.breakdown}>{result.breakdown.map((item) => <li key={item.label}><span>{item.label}</span><b>{formatCurrency(item.amount)}</b></li>)}</ul><small className={styles.notice}>Số liệu chỉ để tham khảo và không thay thế báo giá chính thức.</small></aside></div>;
}
