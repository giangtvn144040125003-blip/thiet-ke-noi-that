const visuals = {
  service: { src: "/images/service-design-hd-v3.webp", alt: "Không gian thiết kế và lập kế hoạch phòng máy gaming" },
  investment: { src: "/images/investment-lounge-hd-v3.webp", alt: "Không gian cyber gaming cao cấp" },
  project: { src: "/images/project-esports-hd-v3.webp", alt: "Không gian esports lounge hoàn thiện" },
  contact: { src: "/images/gaming-room-hero-hd-v3.webp", alt: "Không gian phòng máy gaming hiện đại" },
} as const;

export function PageVisual({ variant }: { variant: keyof typeof visuals }) {
  const visual = visuals[variant];
  return <div className="page-visual" role="img" aria-label={visual.alt} style={{ backgroundImage: `linear-gradient(90deg, rgba(5,8,20,.25), rgba(5,8,20,.06)), url(${visual.src})` }} />;
}
