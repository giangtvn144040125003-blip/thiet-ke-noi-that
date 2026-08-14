"use client";

import { useEffect, useRef } from "react";

type AutoplayVideoProps = {
  className?: string;
  poster: string;
  src: string;
};

/** Keeps the decorative hero video playing after mobile browsers restore a tab. */
export function AutoplayVideo({ className, poster, src }: AutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const resume = () => {
      video.muted = true;
      video.defaultMuted = true;
      void video.play().catch(() => {
        // The poster remains visible when a device power-saving setting blocks autoplay.
      });
    };

    resume();
    video.addEventListener("canplay", resume);
    document.addEventListener("visibilitychange", resume);

    return () => {
      video.removeEventListener("canplay", resume);
      document.removeEventListener("visibilitychange", resume);
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
